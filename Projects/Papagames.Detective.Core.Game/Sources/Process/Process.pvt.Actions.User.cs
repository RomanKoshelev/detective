using System.Collections.Generic;
using System.Linq;
using MoreLinq;
using Papagames.Detective.Utils;

namespace Papagames.Detective.Core.Game
{
    public partial class Process
    {
        // ===================================================================================== []
        // User Action Variants
        private readonly IList<UserAction> _userActions = new List<UserAction>();

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

        private void AddSkipAction()
        {
            _userActions.Add(new UserAction {Type = UserAction.ActionType.Skip});
        }

        private void AddNoneAction()
        {
            _userActions.Add(new UserAction {Type = UserAction.ActionType.None});
        }

        private void AddArrestActions()
        {
            Assert.Equal(State, State.Arrest);
            _userActions.Add(new UserAction {Type = UserAction.ActionType.Arrest});
        }

        private void AddQuestioningActions()
        {
            Assert.Equal(State, State.Questioning);

            var respondent = ActiveMembers.Where(NeedQuestioning).FirstOrDefault();
            
            if (respondent == null)
            {
                AddSkipAction();
                return;
            }

            ActiveMembers.ForEach(subject => _userActions.Add(new UserAction
            {
                Type = UserAction.ActionType.Ask,
                Params = new object[] {respondent.Id, subject.Id}
            }));
        }

        private bool NeedQuestioning(Member member)
        {
            return History.GetAnswers(member, CurrentDay).Count == 0;
        }

        private void DoRunUserAction(UserAction.ActionType actionType)
        {
            switch (actionType)
            {
                case UserAction.ActionType.None:
                    break;
                case UserAction.ActionType.Skip:
                    DoSkip();
                    break;
                case UserAction.ActionType.Arrest:
                    // todo: call Arrest action
                    DoSkip();
                    break;
                case UserAction.ActionType.Ask:
                    // todo: call Ask action
                    DoSkip();
                    break;
                default:
                    throw new DetectiveException("Unexpected action type {0}", actionType);
            }
        }
    }
}