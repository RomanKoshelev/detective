﻿using System;
using System.Collections.Generic;
using System.Linq;
using MoreLinq;
using Papagames.Detective.Core;
using Action = Papagames.Detective.Core.Action;

namespace Papagames.Detective.Console
{
    internal partial class Stage
    {
        private static void PrintEmotions(IEnumerable<Member> members, History history, bool printAll=false)
        {
            if (SilenceMode) return;

            const string nameCellFormat = "  {0,-17}";
            const string emotionCellFormat = "{0,-14}";

            PrintEmotionsHeader(history, nameCellFormat, emotionCellFormat);
            
            members.Where(m => m.IsActive || printAll)
                .ForEach(m =>
            {
                PrintMemberName(nameCellFormat, m);
                history.Records.ToArray().Reverse()
                    .Where(EventIsEmotional)
                    .ForEach(
                        e => PrintMemberEmotionOnEvent(m, FindMemberEmotionOnEvent(m, e, history), emotionCellFormat));
                WriteLine();
            });
        }

        private static History.Record FindMemberEmotionOnEvent(Member m, History.Record eventRecord, History history)
        {
            return history.Records.FirstOrDefault(r => r.Agent == m && r.Day==eventRecord.Day && r.Action == EmotionReactionOn(eventRecord.Action));
        }

        private static Action EmotionReactionOn(Action eventAction)
        {
            return eventAction == Action.Murder
                ? Action.EmotionOnMurder
                : eventAction == Action.Arrest
                    ? Action.EmotionOnArrest
                    : Action.Error;
        }

        private static Func<History.Record, bool> EventIsEmotional
        {
            get { return r => r.Action == Action.Murder || r.Action == Action.Arrest; }
        }

        private static void PrintEmotionsHeader(History history, string indentFormat, string cellFormat)
        {
            Write(indentFormat, "Emotions");
            history.Records.ToArray().Reverse()
                .Where(EventIsEmotional)
                .ForEach(rec => Write(cellFormat, string.Format("{0} {1}",
                    rec.Subject.ShortName(8),
                    NumberOrFullState(rec.Subject)
                    )));
            WriteLine();
        }

        private static void PrintMemberName(string nameCellFormat, Member m)
        {
            Write(nameCellFormat, string.Format("  {0}{1}", NumberOrState(m),m.ShortName(12)));
        }

        private static void PrintMemberEmotionOnEvent(Member m, History.Record e, string emotionCellFormat)
        {
            Write(emotionCellFormat, FormatEmotion(e, m));
        }

        private static object FormatEmotion(History.Record rec, Member member)
        {
            return string.Format("{0,-11}",
                rec == null
                    ? " -  -  -  "
                    : EmotionSign(rec.Emotion));
        }

        private static string EmotionSign(Emotion emotion)
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