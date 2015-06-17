// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// History.cs

using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Crimenuts.Core.Game.Enums;
using Crimenuts.Core.Game.Members;
using Crimenuts.Utils;
using Crimenuts.Utils.Extensions;

namespace Crimenuts.Core.Game.Histories
{
    public partial class History
    {
        // ===================================================================================== []
        // Records
        public readonly List< Record > Records = new List< Record >();

        public IEnumerable< int > Days
        {
            get { return Enumerable.Range( FirstDay, LastDay - FirstDay + 1 ); }
        }

        // ===================================================================================== []
        // Participation
        public void StoreParticipation( int day, Member member )
        {
            Records.Add( new Record( day, Action.Participation, member ) );
        }

        // ===================================================================================== []
        // Murders
        public void StoreMurder( int day, Member murderer, Member victim )
        {
            Records.Add( new Record( day, Action.Murder, murderer, victim ) );
        }

        // ===================================================================================== []
        // Arrests
        public void StoreArrest( int day, Member detective, Member suspect )
        {
            Records.Add( new Record( day, Action.Arrest, detective, suspect ) );
        }

        // ===================================================================================== []
        // Answers
        public IList< Record > Answers
        {
            get { return Records.Where( r => r.Action == Action.Answer ).ToList(); }
        }

        public void StoreAnswer( int day, Member respondent, Member subject, AnswerCode answerCode )
        {
            Records.Add( new Record( day, Action.Answer, respondent, subject, answerCode ) );
        }

        public IList< Record > GetAnswers( Member respondent, int day )
        {
            return Answers.Where( r => r.Agent == respondent && r.Day == day ).ToList();
        }

        // ===================================================================================== []
        // Emotions
        public void StoreEmotionOnMurder( int day, Member member, Member victim, Emotion emotion )
        {
            Trace.Assert( member.IsActive );
            Records.Add( new Record( day, Action.MurderEmotion, member, victim, emotion ) );
        }

        public void StoreEmotionOnArrest( int day, Member member, Member victim, Emotion emotion )
        {
            Trace.Assert( member.IsActive );
            Records.Add( new Record( day, Action.ArrestEmotion, member, victim, emotion ) );
        }

        // ===================================================================================== []
        // Evidences
        public IList< Record > Evidences( int day )
        {
            return Records.Where( r => r.Action.IsEvidence() && r.Day == day ).ToList();
        }

        public void StoreMurderEvidence( int day, Member witness, Member murderer )
        {
            if( Records.NotExists(
                r =>
                    r.Action == Action.MurdererEvidence && r.Day == day && r.Agent == witness &&
                        r.Subject == murderer ) ) {
                Records.Add( new Record( day, Action.MurdererEvidence, witness, murderer ) );
            }
        }

        public void StoreInnocentEvidence( int day, Member witness, Member innocent )
        {
            if( Records.NotExists(
                r =>
                    r.Action == Action.InnocentEvidence && r.Day == day && r.Agent == witness &&
                        r.Subject == innocent ) ) {
                Records.Add( new Record( day, Action.InnocentEvidence, witness, innocent ) );
            }
        }
    }
}