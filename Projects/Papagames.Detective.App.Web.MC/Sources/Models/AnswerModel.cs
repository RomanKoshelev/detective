using Papagames.Detective.Core.Game;

namespace Papagames.Detective.App.Web.Models
{
    public class AnswerModel
    {
        public AnswerModel(History.Record record)
        {
            Agent = new MemberModel(record.Agent);
            Subject = new MemberModel(record.Subject);
            Value = record.Answer;
        }

        public Answer Value { get; private set; }

        public MemberModel Subject { get; private set; }

        public MemberModel Agent { get; private set; }
    }
}