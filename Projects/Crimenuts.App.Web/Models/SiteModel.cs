// Crimenuts (c) 2015 Crocodev
// Crimenuts.App.Web
// SiteModel.cs
// Roman, 2015-03-29 12:56 AM

using System.Collections.Generic;
using Crimenuts.Utils.Localization;

namespace Crimenuts.App.Web.Models
{
    public class SiteModel
    {
        // ===================================================================================== []
        // Public
        public const string LangCookieName = "Site.Language";

        public static IList< Lang > Languages
        {
            get { return Localizator.Languages; }
        }
    }
}