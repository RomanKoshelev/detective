// Celler (c) 2015 Krokodev
// Celler.App.Web
// GameObjectModel.cs

namespace Celler.App.Web.Game.Server.Models
{
    public class GameObjectModel
    {
        public string Id { get; set; }
        public string Suit { get; set; }
        public PointModel Position { get; set; }
        public double Size { get; set; }
    }
}