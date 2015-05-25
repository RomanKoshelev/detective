// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Web
// GameApplication.cs

using System.Web.Hosting;
using Crimenuts.Core.Game.Schemas;

namespace Crimenuts.App.Web
{
    public class GameApplication : IRegisteredObject
    {
        #region Ctor

        public static GameApplication Instance { get; set; }

        public GameApplication()
        {
            Instance = this;
            Schema.Init();
        }

        #endregion


        #region IRegisteredObject

        void IRegisteredObject.Stop( bool immediate ) {}

        #endregion
    }
}