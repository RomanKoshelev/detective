// Crimenuts (c) 2015 Crocodev
// Crimenuts.Core.Game
// State.cs
// Roman, 2015-03-29 12:57 AM

namespace Crimenuts.Core.Game
{
    public enum State
    {
        Error = -1,
        Initial = 0,
        Start,
        Night,
        Morning,
        Questioning,
        Arrest,
        CheckArrest,
        NextDay,
        DetectiveWin,
        MurderersWin,
        Stop,
        End,
        CheckNight,
        Finished,
    }
}