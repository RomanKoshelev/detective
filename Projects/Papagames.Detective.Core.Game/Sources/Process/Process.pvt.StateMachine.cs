using System;
using Papagames.Detective.Common;

namespace Papagames.Detective.Core.Game
{
    public partial class Process
    {
        public void Step()
        {
            switch (State)
            {
                case State.Start:
                    RunStart();
                    State = State.Night;
                    break;
                case State.Night:
                    RunNight();
                    State = State.CheckNight;
                    break;
                case State.CheckNight:
                    State = RunCheckBefore(State.Morning);
                    break;
                case State.Morning:
                    State = State.Questioning;
                    break;
                case State.Questioning:
                    RunQuestioning();
                    State = State.Arrest;
                    break;
                case State.Arrest:
                    RunArrest();
                    State = State.CheckArrest;
                    break;
                case State.CheckArrest:
                    State = RunCheckBefore(State.NextDay);
                    break;
                case State.NextDay:
                    RunNextDay();
                    State = State.Night;
                    break;
                case State.DetectiveWin:
                    RunDetectiveWin();
                    State = State.End;
                    break;
                case State.MurdererWin:
                    State = State.End;
                    break;
                case State.Break:
                    State = State.End;
                    break;
                case State.End:
                    State = State.Finished;
                    break;
                default:
                    throw new Exception(string.Format("Unknoun state [{0}]", State));
            }
        }

        private void RunDetectiveWin()
        {
            DidDeteciveWin = true;
        }

        private State RunCheckBefore(State nextState)
        {
            return ActiveMembers.NotExists(m => m.IsMurderer)
                ? State.DetectiveWin
                : ActiveMembers.NotExists(m => m.IsInnocent)
                    ? State.MurdererWin
                    : nextState;
        }

        private void RunArrest()
        {
            DoArrest();
        }

        private void RunQuestioning()
        {
            UpdateMembersKnownCounts();
        }

        private void RunNextDay()
        {
            CurrentDay++;
        }

        private void RunStart()
        {
            CurrentDay = 1;
        }

        private void RunNight()
        {
            HistoryStoreParticipations();

            DoEvidence();
            DoMurder();
        }
    }
}