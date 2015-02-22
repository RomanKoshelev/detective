using System.Collections.Generic;
using Crimenuts.Utils.Localization;

namespace Crimenuts.App.Web.Models
{
    // Now: Localization | Site | Model
    public class SiteModel
    {
        // ===================================================================================== []
        // Public
        public const string LangCookieName = "Site.Language";
        public static IList<Lang> Languages
        {
            get { return Localizator.Languages; }
        }
    }
}