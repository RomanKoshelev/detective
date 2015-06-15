// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// MemberModel.cs

using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using Crimenuts.App.Ajax.Game.Server.Config;
using Crimenuts.Core.Game.Histories;
using Crimenuts.Core.Game.Members;
using Krokodev.Common.Extensions;

namespace Crimenuts.App.Ajax.Game.Server.Models
{
    [SuppressMessage( "ReSharper", "UnusedAutoPropertyAccessor.Global" )]
    public class MemberModel
    {
        #region Properties

        public string World { get; set; }
        public string Name { get; set; }
        public string TodayAnswer { get; set; }

        #endregion


        #region Ctor

        public MemberModel( Member member, IList< History.Record > todayAnswers )
        {
            World = member.World;
            Name = member.Name;
            TodayAnswer = CreateTodayAnswer( todayAnswers );
        }


        #endregion


        #region Utils

        private static string CreateTodayAnswer( IList< History.Record > todayAnswers )
        {
            if( todayAnswers.Any() ) {
                var answer = todayAnswers.First();
                return "{0} is {1}".SafeFormat( answer.Subject, answer.Answer );
            }
            return Settings.Texts.Process.Member.HasNoAnswer;
        }

        #endregion
    }
}