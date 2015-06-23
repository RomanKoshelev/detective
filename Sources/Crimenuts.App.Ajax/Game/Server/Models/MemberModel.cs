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

        public string World { get; set; }
        public string Name { get; set; }
        public AnswerModel TodayAnswer { get; set; }
        public string Annotation { get; set; }
        public bool IsActive { get; set; }

        #endregion


        #region Ctor

        public MemberModel( Member member, IList< History.Record > todayAnswers )
        {
            World = member.World;
            Name = member.Name;
            IsActive = member.IsActive;
            Annotation = member.Annotation.ToString();
            TodayAnswer = new AnswerModel( member, todayAnswers.FirstOrDefault() );
        }

        #endregion
    }
}