// Crimenuts (c) 2015 Crocodev
// Crimenuts.App.Console
// Player.pvt.Emotions.cs
// Roman, 2015-03-29 12:55 AM

using System;
using System.Linq;
using Crimenuts.Core.Game;
using Crimenuts.Core.Game.Enums;
using Crimenuts.Core.Game.History;
using Crimenuts.Core.Game.Member;
using MoreLinq;
using Action = Crimenuts.Core.Game.Enums.Action;

namespace Crimenuts.App.Console
{
    internal partial class Player
    {
        private void PrintEmotions( bool printAll = false )
        {
            if( SilenceMode ) {
                return;
            }

            const string nameCellFormat = "  {0,-17}";
            const string emotionCellFormat = "{0,-14}";

            PrintEmotionsHeader( History, nameCellFormat, emotionCellFormat );

            Members.Where( m => m.IsActive || printAll )
                .ForEach( m => {
                    PrintMemberName( nameCellFormat, m );
                    History.Records.ToArray().Reverse()
                        .Where( EventIsEmotional )
                        .ForEach(
                            e =>
                                PrintMemberEmotionOnEvent( m,
                                    FindMemberEmotionOnEvent( m, e, History ),
                                    emotionCellFormat ) );
                    WriteLine();
                } );
        }

        private static History.Record FindMemberEmotionOnEvent( Member m, History.Record eventRecord, History history )
        {
            return
                history.Records.FirstOrDefault(
                    r => r.Agent == m && r.Day == eventRecord.Day && r.Action == EmotionReactionOn( eventRecord.Action ) );
        }

        private static Action EmotionReactionOn( Action eventAction )
        {
            return eventAction == Action.Murder
                ? Action.MurderEmotion
                : eventAction == Action.Arrest
                    ? Action.ArrestEmotion
                    : Action.Error;
        }

        private static Func< History.Record, bool > EventIsEmotional
        {
            get { return r => r.Action == Action.Murder || r.Action == Action.Arrest; }
        }

        private void PrintEmotionsHeader( History history, string indentFormat, string cellFormat )
        {
            Write( indentFormat, "Emotions" );
            history.Records.ToArray().Reverse()
                .Where( EventIsEmotional )
                .ForEach( rec => Write( cellFormat,
                    string.Format( "{0} {1}",
                        rec.Subject.ShortName( 8 ),
                        NumberOrFullState( rec.Subject )
                        ) ) );
            WriteLine();
        }

        private void PrintMemberName( string nameCellFormat, Member m )
        {
            Write( nameCellFormat, string.Format( "  {0}{1}", NumberOrState( m ), m.ShortName( 12 ) ) );
        }

        private void PrintMemberEmotionOnEvent( Member m, History.Record e, string emotionCellFormat )
        {
            Write( emotionCellFormat, FormatEmotion( e, m ) );
        }

        private static object FormatEmotion( History.Record rec, Member member )
        {
            return string.Format( "{0,-11}",
                rec == null
                    ? " -  -  -  "
                    : EmotionSign( rec.Emotion ) );
        }

        private static string EmotionSign( Emotion emotion )
        {
            return
                emotion == Emotion.Happy
                    ? ":)"
                    : emotion == Emotion.Indifferent
                        ? "   :|"
                        : emotion == Emotion.Sad
                            ? "      :("
                            : "ERR";
        }
    }
}