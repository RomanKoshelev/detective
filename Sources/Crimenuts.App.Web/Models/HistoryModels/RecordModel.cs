// Crimenuts (c) 2015 Crocodev
// Crimenuts.App.Web
// RecordModel.cs
// Roman, 2015-03-29 12:56 AM

using Crimenuts.Core.Game;

namespace Crimenuts.App.Web.Models
{
    public sealed class RecordModel : BaseHistoryRecordModel
    {
        public RecordModel( History.Record record )
            : base( record ) {}
    }
}