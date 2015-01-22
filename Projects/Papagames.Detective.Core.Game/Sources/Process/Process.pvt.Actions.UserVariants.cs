using System.Collections.Generic;
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
            _userActions.Add(new UserAction {Type = UserAction.ActionType.None});
        }

        private void AddQuestioningActions()
        {
            Assert.Equal(State, State.Questioning);
            _userActions.Add(new UserAction { Type = UserAction.ActionType.None });
        }
    }
}