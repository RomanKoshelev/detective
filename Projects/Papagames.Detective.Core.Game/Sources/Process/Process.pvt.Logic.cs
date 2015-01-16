using System;
using System.Linq;
using MoreLinq;
using Papagames.Detective.Common;

namespace Papagames.Detective.Core.Game
{
    public partial class Process
    {
        #region Implementetion

        // ===================================================================================== []
        private void DoRun(int memberNum, int murderNum)
        {
            Reset(memberNum, murderNum);
            Loop();
        }

        // ===================================================================================== []

        #endregion

        #region State Machine

        // ===================================================================================== []
        private void Loop()
        {
            do Step(); while (State != State.Finished);
        }
        private void Step()
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
                    RunMorning();
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
                    RunMurdererWin();
                    State = State.End;
                    break;
                case State.Break:
                    RunBreak();
                    State = State.End;
                    break;
                case State.End:
                    RunEnd();
                    State = State.Finished;
                    break;
                default:
                    throw new Exception(string.Format("Unknoun state [{0}]", State));
            }
        }

        private static void RunBreak()
        {
        }

        private void RunMurdererWin()
        {
            Stage.OnMurdererWin(Members, History);
        }

        private void RunDetectiveWin()
        {
            DidDeteciveWin = true;
            Stage.OnDetectiveWin(Members, History);
        }

        private State RunCheckBefore(State nextState)
        {
            Stage.OnCheck();

            return ActiveMembers.NotExists(m => m.IsMurderer)
                ? State.DetectiveWin
                : ActiveMembers.NotExists(m => m.IsInnocent)
                    ? State.MurdererWin
                    : nextState;
        }

        private void RunArrest()
        {
            DoDetectiveAction();
        }

        private void RunQuestioning()
        {
            UpdateMembersKnownCounts();
            
            Stage.OnQuestioningStart(Members, History);
            foreach (var member in ActiveMembers)
            {
                var number = Stage.GetQuestionSubjectForAsking(member, ActiveMembers.Where(m => m != member).ToList());
                var subject = ActiveMembers.First(m => m.Number == number);
                var answer = member.Ask(subject);
                Stage.OnAnswer(member, subject, answer);
                History.StoreAnswer(CurrentDay, member, subject, answer);
            }
            Stage.OnQuestioningEnd(Members, History);
        }

        private void RunNextDay()
        {
            CurrentDay++;
            Stage.OnNextDay(CurrentDay);
        }

        private void RunMorning()
        {
            Stage.OnMorning(Members, History);
        }

        private void RunStart()
        {
            CurrentDay = 1;
            Stage.OnGameStart(Members, MaxEvidenceNum, World.Name);
        }

        private void RunNight()
        {
            HistoryStoreParticipations();

            Stage.OnNightStart();

            DoWitnessActions();
            DoMurdererAction();

            Stage.OnNightEnd();
        }

        
        private void RunEnd()
        {
            Stage.OnGameEnd();
        }
        // ===================================================================================== []

        #endregion

        #region Utils

        // ===================================================================================== []
        private void UpdateMembersKnownCounts()
        {
            ActiveMembers.ForEach(m =>
            {
                m.ActualMurderersCount = ActiveMurderers.Count;
                m.ActualMembersCount = ActiveMembers.Count;
            });
        }        
        
        private void Reset(int memberNum, int murderNum)
        {
            DidDeteciveWin = false;
            State = State.Start;
            SelectMembers(memberNum);
            AssignMurderers(murderNum);
        }

        // ===================================================================================== []

        #endregion
    }
}