using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Papagames.Detective.Utils;

namespace Papagames.Detective.Core.Game
{
    public partial class Process
    {
        // ===================================================================================== []
        // User Action Menu
        private readonly IList<UserAction> _userActions = new List<UserAction>();

        // ===================================================================================== []
        // Update
        private void UpdateUserActions()
        {
            _userActions.Clear();
            switch (State)
            {
                case State.Initial:
                    AddInitActions();
                    break;
                case State.Questioning:
                    AddQuestioningActions();
                    break;
                case State.Arrest:
                    AddArrestActions();
                    break;
                case State.Finished:
                case State.Error:
                    AddNoneAction();
                    break;
                default:
                    AddSkipAction();
                    break;
            }
        }

        // ===================================================================================== []
        // Skip, None, Init
        private void AddInitActions()
        {
            _userActions.Add(new UserAction { Type = UserAction.ActionType.Start});
        }
        private void AddSkipAction()
        {
            _userActions.Add(new UserAction {Type = UserAction.ActionType.Skip});
        }
        private void AddNoneAction()
        {
            _userActions.Add(new UserAction {Type = UserAction.ActionType.None});
        }

        // ===================================================================================== []
        // Arrest
        private void AddArrestActions()
        {
            Assert.Equal(State, State.Arrest);

            var suspects = ActiveMembers.Where(CanBeArrested).ToList();

            if (suspects.Any())
            {
                suspects.ForEach(s => _userActions.Add(new UserAction
                {
                    Type = UserAction.ActionType.Arrest,
                    Params = new[] {s.Number},
                    Description = string.Format("Arrest {0}", s.Name)
                }));

                return;
            }

            AddSkipAction();
        }

        // ===================================================================================== []
        // Ask
        private void AddQuestioningActions()
        {
            Assert.Equal(State, State.Questioning);

            var respondent = ActiveMembers.Where(CanBeQuestioned).FirstOrDefault();

            if (respondent != null)
            {
                var subjects = ActiveMembers.Where(s => CanAskAbout(respondent, s)).ToList();
                if (subjects.Any())
                {
                    subjects.ForEach(subject => _userActions.Add(new UserAction
                    {
                        Type = UserAction.ActionType.Ask,
                        Params = new[] {respondent.Number, subject.Number},
                        Description = string.Format("Ask {0} about {1}", respondent.Name, subject.Name)
                    }));
                    return;
                }
            }

            AddSkipAction();
        }

        // ===================================================================================== []
        // Rules
        private bool CanAskAbout(Member correspondent, Member subject)
        {
            if (correspondent == subject)
                return false;

            if (AlreadyHasAnsweredToday(correspondent, subject))
                return false;

            return true;
        }

        private bool CanBeQuestioned(Member member)
        {
            return History.GetAnswers(member, CurrentDay).Count == 0;
        }

        private static bool CanBeArrested(Member member)
        {
            return member.IsActive;
        }

        // ===================================================================================== []
        // Dispatcher
        private void DoExecuteUserAction(UserAction.ActionType actionType, IList<int> actionParams, bool autoSkip)
        {
            Assert.NotNull(actionParams, "Action params are null");
            DispatchExecuteAction(actionType, actionParams);

            if (autoSkip)
            {
                SkipAllPossibleSteps();
            }
        }

        private void SkipAllPossibleSteps()
        {
            while (OnlySkipActionIsAvailable())
            {
                DoSkip();
            }
        }

        private bool OnlySkipActionIsAvailable()
        {
            return UserActions.Count == 1 && UserActions[0].Type == UserAction.ActionType.Skip;
        }

        private void DispatchExecuteAction(UserAction.ActionType actionType, IList<int> actionParams)
        {
            AssertParametersAreValid(actionType, actionParams);
            switch (actionType)
            {
                case UserAction.ActionType.None:
                    break;
                case UserAction.ActionType.Stop:
                    DoStop();
                    break;
                case UserAction.ActionType.Start:
                    DoSkip();
                    break;
                case UserAction.ActionType.Skip:
                    DoSkip();
                    break;
                case UserAction.ActionType.Arrest:
                    DoArrest(actionParams[0]);
                    break;
                case UserAction.ActionType.Ask:
                    DoAsk(actionParams[0], actionParams[1]);
                    break;
                default:
                    throw new DetectiveException("Unexpected action type {0}", actionType);
            }
            UpdateUserActions();
        }

        private void AssertParametersAreValid(UserAction.ActionType actionType, ICollection<int> actionParams)
        {
            Assert.NotNull(actionParams,
                "Parameters for action {0} are null", actionType);

            var ok = UserActions.Where(a => a.Type == actionType).Any(a => a.Params.EqualContent(actionParams));

            Assert.IsTrue(ok,
                "Wrong parameters for action {0}: [{1}]", actionType,
                actionParams.ToList().AggregateBy(i => string.Format("{0}", i)));
        }
    }
}