namespace Papagames.Detective.Core.Game
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
        MurdererWin,
        Break,
        End,
        CheckNight,
        Finished,
    }
}