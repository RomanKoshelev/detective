// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// AnswerModel.cs

using Crimenuts.Core.Game.Histories;
using Crimenuts.Core.Game.Members;

namespace Crimenuts.App.Ajax.Game.Server.Models
{
    public class AnswerModel
    {
        public bool IsValid { get; set; }

        public string Agent { get; set; }

        public string Subject { get; set; }

        public string Message { get; set; }

        public AnswerModel( Member member, History.Record record )
        {
            Agent = member.Name;
            if( record == null ) {
                IsValid = false;
                Message = "no answer";
            } else {
                IsValid = true;
                Subject = record.Subject.Name;
                Message = record.Answer.ToString();
            }
        }
    }
}