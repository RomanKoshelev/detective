// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// ProcessModel.cs

using System.Collections.Generic;
using System.Linq;
using Crimenuts.Core.Game.Members;
using Crimenuts.Core.Game.Processes;

namespace Crimenuts.App.Ajax.Game.Server.Models
{
    public class ProcessModel : IModel< Process >
    {
        #region Ctor

        public ProcessModel( Process process )
        {
            IModel.InitFrom( process );
        }

        #endregion


        #region Properties

        public string Id { get; set; }
        public string CaseId { get; set; }
        public List< string > Members { get; set; }
        public string World { get; set; }
        public string State { get; set; }
        public string TodayPrisoner { get; set; }
        public string TodayVictim { get; set; }
        public int Today { get; set; }
        public int? ActiveMurderersOpenNum { get; set; }

        #endregion


        #region IModel

        private IModel< Process > IModel
        {
            get { return this; }
        }

        void IModel< Process >.InitFrom( Process process )
        {
            Id = process.Id.Value.ToString();
            CaseId = process.CaseId.Value.ToString();
            World = process.Case.World.Name;
            Members = process.Members.Select( m => m.Name ).ToList();
            State = process.State.ToString();
            Today = process.Today;
            TodayVictim = getName( process.TodayVictim );
            TodayPrisoner = getName( process.TodayPrisoner );
            ActiveMurderersOpenNum = process.ActiveMurderersOpenNum;
        }

        #endregion


        #region Utils

        private string getName( Member m )
        {
            return m == null ? null : m.Name;
        }

        #endregion
    }
}