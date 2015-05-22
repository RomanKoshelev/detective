// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// GameObjectModel.cs

namespace Crimenuts.App.Ajax.Game.Server.Models
{
    public class GameObjectModel
    {
        public string Id { get; set; }
        public string Suit { get; set; }
        public PointModel Position { get; set; }
        public double Size { get; set; }
    }
}