// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// ProcessModel.cs

using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using Crimenuts.Core.Game.Histories;
using Crimenuts.Core.Game.Members;
using Crimenuts.Core.Game.Processes;

namespace Crimenuts.App.Ajax.Game.Server.Models
{
    [SuppressMessage( "ReSharper", "UnusedAutoPropertyAccessor.Global" )]
    public class ProcessModel
    {
        #region Properties

        public string Id { get; set; }
        public string CaseId { get; set; }
        public string World { get; set; }
        public string State { get; set; }
        public TodayModel Today { get; set; }
        public List< MemberModel > Members { get; set; }
        public List< AnswerModel > Answers { get; set; }
        public List< UserActionModel > Actions { get; set; }

        #endregion


        #region Ctor

        public ProcessModel( Process process )
        {
            Id = process.Id.Value.ToString();
            CaseId = process.CaseId.Value.ToString();
            World = process.Case.World.Name;
            State = process.State.ToString();
            Today = new TodayModel( process );
            Members = CreateMembers( process );
            Answers = CreateAnswers( process );
            Actions = CreateActions ( process );
        }

        #endregion


        #region Utils

        private List< UserActionModel > CreateActions( Process process )
        {
            return process.UserActions.Select( CreateUserActiopnModel ).ToList();
        }

        private UserActionModel CreateUserActiopnModel( Process.UserAction userAction )
        {
            return new UserActionModel {
                Description = userAction.Description,
                Type = userAction.Type.ToString(),
                Args = userAction.Args.ToList()
            };
        }

        private static List< MemberModel > CreateMembers( Process process )
        {
            return process.Members.Select( m => new MemberModel(
                m,
                process.History.GetAnswers( m, process.Today )
                ) ).ToList();
        }

        private static List< AnswerModel > CreateAnswers( Process process )
        {
            return process.ActiveMembers.Select( m => CreateAnswerModel( m, process.History.Answers ) ).ToList();
        }

        private static AnswerModel CreateAnswerModel( Member member, IEnumerable< History.Record > answers )
        {
            return new AnswerModel( member, answers.FirstOrDefault( a => a.Agent == member ) );
        }

        #endregion
    }
}