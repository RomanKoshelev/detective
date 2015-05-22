// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// Startup.cs

using Crimenuts.App.Ajax;
using Microsoft.Owin;
using Owin;

[assembly : OwinStartup( typeof( Startup ) )]

namespace Crimenuts.App.Ajax
{
    public class Startup
    {
        public void Configuration( IAppBuilder app )
        {
            app.MapSignalR();
        }
    }
}