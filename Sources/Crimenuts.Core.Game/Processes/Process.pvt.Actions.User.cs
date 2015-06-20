// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Process.pvt.Actions.User.cs

using System.Collections.Generic;
using System.Linq;
using Crimenuts.Core.Game.Enums;
using Crimenuts.Core.Game.Members;
using Crimenuts.Utils;
using Crimenuts.Utils.Extensions;
using Crimenuts.Utils.Traces;
using MoreLinq;

namespace Crimenuts.Core.Game.Processes
{
    public partial class Process
    {
        // ===================================================================================== []
        // User Action Menu
        private readonly IList< UserAction > _userActions = new List< UserAction >();

        // ===================================================================================== []
        // Update
        private void UpdateUserActions()
        {
            _userActions.Clear();
            switch( State ) {
                case State.Initial :
                    AddInitActions();
                    break;
                case State.Questioning :
                    AddQuestioningActions();
                    AddExtraQuestioningActions();
                    break;
                case State.Arrest :
                    AddArrestActions();
                    break;
                case State.Finished :
                case State.Error :
                    AddNoneAction();
                    break;
                case State.Morning :
                case State.CheckArrest :
                    AddContinueAction();
                    break;
                default :
                    AddSkipAction();
                    break;
            }
        }

        // ===================================================================================== []
        // Skip, None, Init, Continue
        private void AddInitActions()
        {
            AddUserAction( UserAction.ActionType.Start );
        }

        private void AddSkipAction()
        {
            AddUserAction( UserAction.ActionType.Skip );
        }

        private void AddNoneAction()
        {
            AddUserAction( UserAction.ActionType.None );
        }

        private void AddContinueAction()
        {
            AddUserAction( UserAction.ActionType.Continue );
        }

        // ===================================================================================== []
        // Arrest
        private void AddArrestActions()
        {
            CrimenutsAssert.IsTrue( State == State.Arrest, "Wrong State {0} for adding ArrestActionn", State );

            var suspects = ActiveMembers.Where( CanBeArrested ).ToList();

            if( suspects.Any() ) {
                suspects.ForEach( s => AddUserAction(
                    UserAction.ActionType.Arrest,
                    new[] { s.Number },
                    string.Format( "Arrest {0}", s.Name )
                    ) );
                return;
            }
            AddSkipAction();
        }

        private void AddEarlyArrestActions()
        {
            CrimenutsAssert.IsTrue( State == State.Questioning, "Wrong State {0} for adding EarlyArrestActionn", State );

            var suspects = ActiveMembers.Where( CanBeArrested ).ToList();

            if( suspects.Any() ) {
                suspects.ForEach( s => AddUserAction(
                    UserAction.ActionType.EarlyArrest,
                    new[] { s.Number },
                    string.Format( "Early Arrest {0}", s.Name )
                    ) );
            }
        }

        private void AddEarlyArrestActionsIfEnabled()
        {
            if( Options.EarlyArrestIsEnabled ) {
                AddEarlyArrestActions();
            }
        }

        // ===================================================================================== []
        // Ask
        private void AddQuestioningActions()
        {
            CrimenutsAssert.Equal( State, State.Questioning );

            var needSkipAction = true;
            GetQuestioningRespondents().ForEach( r => {
                if( AddQuestionsForRespondent( r ) ) {
                    needSkipAction = false;
                }
            } );

            if( needSkipAction ) {
                AddSkipAction();
            }
        }

        private void AddExtraQuestioningActions()
        {
            if( _userActions.Any( a => a.Type == UserAction.ActionType.Ask ) ) {
                AddAutoAskActionIfEnabled();
                AddEarlyArrestActionsIfEnabled();
            }
        }

        private IList< Member > GetQuestioningRespondents()
        {
            if( Options.SelectAnyRespondentOnQuestioning ) {
                return ActiveMembers.Where( CanBeQuestioned ).ToList();
            }
            return new[] { ActiveMembers.Where( CanBeQuestioned ).FirstOrDefault() };
        }

        private bool AddQuestionsForRespondent( Member respondent )
        {
            if( respondent != null ) {
                var subjects = ActiveMembers.Where( s => CanAskAbout( respondent, s ) ).ToList();
                if( subjects.Any() ) {
                    subjects.ForEach( subject =>
                        AddUserAction(
                            UserAction.ActionType.Ask,
                            new[] { respondent.Number, subject.Number },
                            string.Format( "Ask {0} about {1}", respondent.Name, subject.Name )
                            ) );
                    return true;
                }
            }
            return false;
        }

        // ===================================================================================== []
        // AutoAsk
        private void AddAutoAskAction()
        {
            AddUserAction( UserAction.ActionType.AutoAsk );
        }

        private void AddAutoAskActionIfEnabled()
        {
            if( Options.AutoQuestioningIsEnabled ) {
                AddAutoAskAction();
            }
        }

        // ===================================================================================== []
        // Rules
        private bool CanAskAbout( Member correspondent, Member subject )
        {
            if( correspondent == subject ) {
                return false;
            }

            if( AlreadyHasAnsweredToday( correspondent, subject ) ) {
                return false;
            }

            return true;
        }

        private bool CanBeQuestioned( Member member )
        {
            return History.GetAnswers( member, Today ).Count == 0;
        }

        private static bool CanBeArrested( Member member )
        {
            return member.IsActive;
        }

        private bool IsActionEnabled( UserAction.ActionType actionType )
        {
            return _userActions.Any( a => a.Type == actionType );
        }

        // ===================================================================================== []
        // Utils
        private void AddUserAction( UserAction.ActionType type, int[] args = null, string description = "" )
        {
            args = args ?? new int[0];
            _userActions.Add( new UserAction {
                Type = type,
                Args = args,
                Description = description
            } );
        }

        // ===================================================================================== []
        // Dispatcher
        private void DoExecuteUserAction( UserAction.ActionType actionType, IList< int > args, bool autoSkip )
        {
            CrimenutsAssert.NotNull( args, "Action params are null" );
            DispatchExecuteAction( actionType, args );

            if( autoSkip ) {
                SkipAllPossibleSteps();
            }
        }

        private void SkipAllPossibleSteps()
        {
            while( OnlySkipActionIsAvailable() ) {
                DoSkip();
            }
        }

        private bool OnlySkipActionIsAvailable()
        {
            return UserActions.Count == 1 && UserActions[ 0 ].Type == UserAction.ActionType.Skip;
        }

        private void DispatchExecuteAction( UserAction.ActionType actionType, IList< int > args )
        {
            AssertParametersAreValid( actionType, args );
            switch( actionType ) {
                case UserAction.ActionType.None :
                    break;
                case UserAction.ActionType.Stop :
                    DoStop();
                    break;
                case UserAction.ActionType.Start :
                    DoSkip();
                    break;
                case UserAction.ActionType.Skip :
                    DoSkip();
                    break;
                case UserAction.ActionType.Continue :
                    DoSkip();
                    break;
                case UserAction.ActionType.Arrest :
                    DoArrest( args[ 0 ] );
                    break;
                case UserAction.ActionType.Ask :
                    DoAsk( args[ 0 ], args[ 1 ] );
                    break;
                case UserAction.ActionType.EarlyArrest :
                    DoEarlyArrest( args[ 0 ] );
                    break;
                case UserAction.ActionType.AutoAsk :
                    DoAutoAsk();
                    break;
                default :
                    throw new CrimenutsException( "Unexpected action type {0}", actionType );
            }
            UpdateUserActions();
        }

        // ===================================================================================== []
        // Verification
        private void AssertParametersAreValid( UserAction.ActionType actionType, ICollection< int > args )
        {
            CrimenutsAssert.NotNull( args,
                "Args for action {0} are null",
                actionType );

            CrimenutsAssert.IsTrue( VerifyActionArgs( actionType, args ),
                "Wrong args for action {0}: [{1}]",
                actionType,
                args.ToList().FoldToStringBy( i => string.Format( "{0}", i ) ) );
        }

        private bool VerifyActionArgs( UserAction.ActionType actionType, ICollection< int > args )
        {
            return
                UserActions
                    .Where( a => a.Type == actionType )
                    .Any( a => a.Args.EqualContent( args ) );
        }
    }
}