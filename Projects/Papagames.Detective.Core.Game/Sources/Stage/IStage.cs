using System.Collections.Generic;

namespace Papagames.Detective.Core.Game
{
    public interface IStage
    {
        void OnGameStart(IList<Member> members, int maxEvidencePerNight, string worldName);
        void OnMurder(Member murderer, Member victim, IList<Member> members, History history);
        void OnWitness(Member witness, Member evidence);
        void OnNightStart();
        void OnNightEnd();
        void OnMorning(IList<Member> members, History history);
        void OnGameEnd();
        void OnQuestioningStart(IList<Member> members, History history);
        void OnArrestStart(IList<Member> members, History history);
        void OnArrestEnd(Member arrested, IList<Member> members, History history);
        void OnDetectiveWin(IList<Member> members, History history);
        void OnMurdererWin(IList<Member> members, History history);
        void OnNextDay(int currentDay);
        void OnCheck();
        int GetQuestionSubjectForAsking(Member member, IList<Member> subjects);
        void OnAnswer(Member respondent, Member subject, Answer answer);
        void OnQuestioningEnd(IList<Member> members, History history);
        int GetSuspectNumberForArrest(IList<Member> members);
    }
}