using System.Collections.Generic;
using System.Linq;
using MoreLinq;
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
        // Skip, None
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
                    Params = new []{s.Number}
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
                        Params = new [] {respondent.Number, subject.Number}
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

        private static bool CanBeArrested (Member member)
        {
            return member.IsActive;
        }

        // ===================================================================================== []
        // Dispatcher
        private void DoExecuteUserAction(UserAction.ActionType actionType, int[] actionParams, bool autoSkip)
        {
            switch (actionType)
            {
                case UserAction.ActionType.None:
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
    }
}