// Crimenuts (c) 2015 Crocodev
// Crimenuts.App.Web
// EmotionModel.cs
// Roman, 2015-03-29 12:56 AM

using Crimenuts.Core.Game;
using Crimenuts.Core.Game.Enums;
using Crimenuts.Core.Game.History;

namespace Crimenuts.App.Web.Models
{
    public sealed class EmotionModel : GenericHistoryRecordModel< Emotion >
    {
        public EmotionModel( History.Record record )
            : base( record, r => r.Emotion ) {}
    }
}