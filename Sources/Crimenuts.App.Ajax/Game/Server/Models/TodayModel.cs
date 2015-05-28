// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// TodayModel.cs

using Crimenuts.Core.Game.Members;
using Crimenuts.Core.Game.Processes;

namespace Crimenuts.App.Ajax.Game.Server.Models
{
    public class TodayModel
    {
        public string Prisoner { get; set; }
        public string Victim { get; set; }
        public int Day { get; set; }
        public int? ActiveMurdererNum { get; set; }

        public TodayModel( Process process )
        {
            Day = process.Today;
            Victim = getName( process.TodayVictim );
            Prisoner = getName( process.TodayPrisoner );
            ActiveMurdererNum = process.ActiveMurderersOpenNum;
        }

        private static string getName( Member m )
        {
            return m == null ? "nobody" : m.Name;
        }
    }
}