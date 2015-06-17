// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// AnswerModel.cs

using Crimenuts.App.Ajax.Game.Server.Config;
using Crimenuts.Core.Game.Histories;
using Crimenuts.Core.Game.Members;
using Krokodev.Common.Extensions;

namespace Crimenuts.App.Ajax.Game.Server.Models
{
    public class AnswerModel
    {
        public bool IsValid { get; set; }

        public string AgentName { get; set; }
        public int AgentId { get; set; }
        public string SubjectName { get; set; }
        public int SubjectId { get; set; }
        public string AnswerText { get; set; }
        public string AnswerDiaogText { get; set; }
        public string AnswerCode { get; set; }

        public AnswerModel( Member member, History.Record record )
        {
            AgentName = member.Name;
            AgentId = member.Number - 1;

            if( record == null ) {
                IsValid = false;
                AnswerText = Settings.Texts.Process.NoAnswer;
                AnswerDiaogText = Settings.Texts.Process.AskMe;
            } else {
                IsValid = true;
                SubjectName = record.Subject.Name;
                SubjectId = record.Subject.Number - 1;
                AnswerCode = record.AnswerCode.ToString();
                AnswerText = "{0}".SafeFormat( record.AnswerCode );
                AnswerDiaogText = "{0} is {1}".SafeFormat( record.Subject.Name, record.AnswerCode );
            }
        }
    }
}