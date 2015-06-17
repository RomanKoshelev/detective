// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Process.pvt.StateMachine.cs

using Crimenuts.Core.Game.Enums;
using Crimenuts.Utils;
using Crimenuts.Utils.Extensions;
using Crimenuts.Utils.Traces;

namespace Crimenuts.Core.Game.Processes
{
    public partial class Process
    {
        private State _state;

        private void DoStep()
        {
            switch( State ) {
                case State.Initial :
                    SetState( State.Start );
                    break;
                case State.Start :
                    Start( State.Night );
                    break;
                case State.Night :
                    Night( State.CheckNight );
                    break;
                case State.CheckNight :
                    CheckAndSet( State.Morning, State.DetectiveWin, State.MurderersWin );
                    break;
                case State.Morning :
                    Morning( State.Questioning );
                    break;
                case State.Questioning :
                    SetState( State.Arrest );
                    break;
                case State.Arrest :
                    SetState( State.CheckArrest );
                    break;
                case State.CheckArrest :
                    CheckAndSet( State.NextDay, State.DetectiveWin, State.MurderersWin );
                    break;
                case State.NextDay :
                    NextDay( State.Night );
                    break;
                case State.DetectiveWin :
                    DetectiveWin( State.End );
                    break;
                case State.MurderersWin :
                    MurderersWin( State.End );
                    break;
                case State.Stop :
                    Stop( State.End );
                    break;
                case State.End :
                    SetState( State.Finished );
                    break;
                case State.Finished :
                    Finished( State.Error );
                    break;
            }
        }

        private void SetState( State state )
        {
            _state = state;
            UpdateUserActions();
        }

        private void Start( State state )
        {
            Today = 1;
            SetState( state );
        }

        private void Night( State state )
        {
            UpdateMembersLastActiviryDay();
            HistoryStoreParticipations();

            DoMurder();
            DoEvidence();

            SetState( state );
        }

        private void Morning( State state )
        {
            UpdateMembersKnownCounts();

            SetState( state );
        }

        private void NextDay( State state )
        {
            Today++;
            SetState( state );
        }

        private void CheckAndSet( State stateNext, State stateWin, State stateFail )
        {
            SetState( ActiveMembers.NotExists( m => m.IsMurderer )
                ? stateWin
                : ActiveMembers.NotExists( m => m.IsInnocent )
                    ? stateFail
                    : stateNext );
        }

        private void DetectiveWin( State state )
        {
            Winner = Winner.Detective;
            SetState( state );
        }

        private void MurderersWin( State state )
        {
            Winner = Winner.Murderers;
            SetState( state );
        }

        private void Stop( State state )
        {
            Winner = Winner.Nobody;
            SetState( state );
        }

        private void Finished( State state )
        {
            throw new CrimenutsException( "State {0} can't be run", state );
        }

        private void DoRunFirstNightUntilQuestioning()
        {
            do DoStep(); while( State != State.Questioning );
        }
    }
}