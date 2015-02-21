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