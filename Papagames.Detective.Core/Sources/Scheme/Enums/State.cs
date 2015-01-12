namespace Papagames.Detective.Core
{
    public enum State
    {
        Error = -1,
        Start = 0,
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
        Finished
    }
}