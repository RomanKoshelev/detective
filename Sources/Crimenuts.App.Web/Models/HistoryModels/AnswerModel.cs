// Crimenuts (c) 2015 Crocodev
// Crimenuts.App.Web
// AnswerModel.cs
// Roman, 2015-03-29 12:56 AM

using Crimenuts.Core.Game;

namespace Crimenuts.App.Web.Models
{
    public class AnswerModel : GenericHistoryRecordModel< Answer >
    {
        public AnswerModel( History.Record record )
            : base( record, r => r.Answer ) {}
    }
}