using System.Collections.Generic;
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
            _userActions.Add(new UserAction { Type = UserAction.ActionType.None });
        }

        private void AddArrestActions()
        {
            Assert.Equal(State, State.Arrest);
            _userActions.Add(new UserAction {Type = UserAction.ActionType.Arrest});
        }

        private void AddQuestioningActions()
        {
            Assert.Equal(State, State.Questioning);
            
            ActiveMembers.ForEach(respondent =>
            {
                ActiveMembers.ForEach(subject =>
                {
                    var action = new UserAction();
                    action.Type = UserAction.ActionType.Ask;
                    action.Params.Add(respondent.Id);
                    action.Params.Add(subject.Id);
                    _userActions.Add(action);
                });
            });
        }
    }
}