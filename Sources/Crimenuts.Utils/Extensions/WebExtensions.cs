// Crimenuts (c) 2015 Crocodev
// Crimenuts.Utils
// WebExtensions.cs
// Roman, 2015-03-29 12:57 AM

using System.Collections.Generic;
using System.Web.Mvc;

namespace Crimenuts.Utils.Extensions
{
    public static class WebExtensins
    {
        public static ViewDataDictionary NewViewData( this HtmlHelper htmlHelper, object viewData )
        {
            if( viewData == null ) {
                return null;
            }

            IDictionary< string, object > dict = viewData.ToDictionary();

            //We build the ViewDataDictionary from scratch, because the
            //  object parameter constructor for ViewDataDictionary doesn't
            //  seem to work...
            var vd = new ViewDataDictionary();
            foreach( var item in dict ) {
                vd[ item.Key ] = item.Value;
            }

            return vd;
        }
    }
}