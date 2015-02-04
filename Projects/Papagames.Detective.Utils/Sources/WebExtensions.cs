using System.Collections.Generic;
using System.Web.Mvc;

namespace Papagames.Detective.Utils
{
    public static class WebExtensins
    {
        public static ViewDataDictionary NewViewData(this HtmlHelper htmlHelper, object viewData)
        {
            if (viewData == null) return null;

            IDictionary<string, object> dict = viewData.ToDictionary();

            //We build the ViewDataDictionary from scratch, because the
            //  object parameter constructor for ViewDataDictionary doesn't
            //  seem to work...
            ViewDataDictionary vd = new ViewDataDictionary();
            foreach (var item in dict)
            {
                vd[item.Key] = item.Value;
            }

            return vd;
        }

    }
}
