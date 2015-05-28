// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// ProcessModel.cs

using System.Collections.Generic;
using System.Linq;
using Crimenuts.Core.Game.Histories;
using Crimenuts.Core.Game.Members;
using Crimenuts.Core.Game.Processes;

namespace Crimenuts.App.Ajax.Game.Server.Models
{
    public class ProcessModel
    {
        public ProcessModel( Process process )
        {
            InitFrom( process );
        }


        #region Properties

        public string Id { get; set; }
        public string CaseId { get; set; }
        public string World { get; set; }
        public string State { get; set; }
        public TodayModel Today { get; set; }
        public List< string > Members { get; set; }
        public List< AnswerModel > Answers { get; set; }

        #endregion


        #region Utils

        private void InitFrom( Process process )
        {
            Id = process.Id.Value.ToString();
            CaseId = process.CaseId.Value.ToString();
            World = process.Case.World.Name;
            Members = process.Members.Select( m => m.Name ).ToList();
            State = process.State.ToString();
            Today = new TodayModel( process );
            Answers = CreateAnswers( process );
        }

        private List< AnswerModel > CreateAnswers( Process process )
        {
            return process.ActiveMembers.Select( m => CreateAnswerModel( m, process.History.Answers ) ).ToList();
        }

        private AnswerModel CreateAnswerModel( Member member, IEnumerable< History.Record > answers )
        {
            return new AnswerModel( member, answers.FirstOrDefault( a => a.Agent == member ) );
        }

        #endregion
    }
}