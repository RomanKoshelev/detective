// Crimenuts (c) 2015 Crocodev
// Crimenuts.App.Web
// AnswerModel.cs
// Roman, 2015-03-29 12:56 AM

using Crimenuts.Core.Game;
using Crimenuts.Core.Game.Enums;
using Crimenuts.Core.Game.Histories;

namespace Crimenuts.App.Web.Models
{
    public class AnswerModel : GenericHistoryRecordModel< AnswerCode >
    {
        public AnswerModel( History.Record record )
            : base( record, r => r.AnswerCode ) {}
    }
}