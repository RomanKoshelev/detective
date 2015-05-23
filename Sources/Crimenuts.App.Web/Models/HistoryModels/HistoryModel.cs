// Crimenuts (c) 2015 Crocodev
// Crimenuts.App.Web
// HistoryModel.cs
// Roman, 2015-03-29 12:56 AM

using System;
using System.Collections.Generic;
using System.Linq;
using Crimenuts.Core.Game;
using Crimenuts.Core.Game.Enums;
using Crimenuts.Core.Game.Histories;
using Crimenuts.Utils;
using MoreLinq;
using Action = Crimenuts.Core.Game.Enums.Action;

namespace Crimenuts.App.Web.Models
{
    public class HistoryModel
    {
        // ===================================================================================== []
        // Constructor
        public HistoryModel( History history )
        {
            History = history;
        }

        public IEnumerable< int > Days
        {
            get { return History.Days; }
        }

        public IList< AnswerModel > Answers( int day )
        {
            return CreateModels( day, r => r.Action == Action.Answer, r => new AnswerModel( r ) );
        }

        public IList< RecordModel > Participations( int day )
        {
            return CreateModels( day, r => r.Action == Action.Participation, r => new RecordModel( r ) );
        }

        public IList< RecordModel > RealActions( int day )
        {
            return CreateModels( day, r => r.Action.IsRealAction(), r => new RecordModel( r ) );
        }

        public IList< EmotionModel > EmotionValues( Action emotionType, int subjectNum )
        {
            return Emotions( emotionType ).Where( e => e.Subject.Number == subjectNum ).ToList();
        }

        public IList< EmotionModel > EmotionSubjects( Action emotionType )
        {
            return Emotions( emotionType ).DistinctBy( e => e.Subject.Number ).ToList();
        }

        // ===================================================================================== []
        // Private
        private History History { get; set; }

        private IList< EmotionModel > Emotions( Action action )
        {
            CrimenutsAssert.IsTrue( action.IsEmotion(), "Wrong emotion [{0}]", action );
            return
                History.Records.OrderBy( r => r.Day )
                    .Where( r => r.Action == action )
                    .Select( r => new EmotionModel( r ) )
                    .ToList();
        }

        private IList< T > CreateModels<T>(
            int day,
            Func< History.Record, bool > predicate,
            Func< History.Record, T > creator )
        {
            return History.Records
                .Where( r => r.Day == day )
                .Where( predicate )
                .Select( creator )
                .ToList();
        }
    }
}