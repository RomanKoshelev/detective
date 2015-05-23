// Crimenuts (c) 2015 Crocodev
// Crimenuts.App.Web
// GenericHistoryRecordModel.cs
// Roman, 2015-03-29 12:56 AM

using System;
using Crimenuts.Core.Game;
using Crimenuts.Core.Game.Histories;

namespace Crimenuts.App.Web.Models
{
    public class GenericHistoryRecordModel<TValue> : BaseHistoryRecordModel
    {
        protected GenericHistoryRecordModel( History.Record record, Func< History.Record, TValue > value )
            : base( record )
        {
            Value = value( record );
        }

        public TValue Value { get; private set; }
    }
}