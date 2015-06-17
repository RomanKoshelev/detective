// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// MemberModel.cs

using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using Crimenuts.Core.Game.Histories;
using Crimenuts.Core.Game.Members;

namespace Crimenuts.App.Ajax.Game.Server.Models
{
    [SuppressMessage( "ReSharper", "UnusedAutoPropertyAccessor.Global" )]
    public class MemberModel
    {
        #region Properties

        public int Id { get; set; }
        public string World { get; set; }
        public string Name { get; set; }
        public AnswerModel TodayAnswer { get; set; }

        #endregion


        #region Ctor

        public MemberModel( Member member, IList< History.Record > todayAnswers )
        {
            World = member.World;
            Name = member.Name;
            TodayAnswer = new AnswerModel( member, todayAnswers.FirstOrDefault() );
        }

        #endregion
    }
}