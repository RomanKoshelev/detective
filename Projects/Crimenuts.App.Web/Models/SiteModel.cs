using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Crimenuts.Utils.Localization;

namespace Crimenuts.App.Web.Models
{
    // Now: Localization | Site | Model
    public class SiteModel
    {
        // ===================================================================================== []
        // Public
        public IList<Lang> Languages
        {
            get { return Localizator.Languages; }
        }
    }
}