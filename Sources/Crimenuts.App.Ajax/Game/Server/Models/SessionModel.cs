// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// SessionModel.cs

namespace Crimenuts.App.Ajax.Game.Server.Models
{
    public class SessionModel
    {
        public string Id { get; set; }
        public CellModel[] Cells { get; set; }
        public HomeModel[] Homes { get; set; }
        public SightModel[] Sights { get; set; }
        public FoodModel[] Foods { get; set; }
        public double UpdateInterval { get; set; }
    }
}