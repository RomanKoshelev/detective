using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Web;
using System.Web.Routing;

namespace Crimenuts.Utils.Web
{
    public class ArrayRoute : Route
    {
        public ArrayRoute(string url, IRouteHandler routeHandler)
            : base(url, routeHandler)
        {
        }

        public override VirtualPathData GetVirtualPath(RequestContext requestContext, RouteValueDictionary routeValues)
        {
            Assert.IsTrue(routeValues.Count > 0, "routeValues is empty");
            var enumerables = new NameValueCollection();

            // collects all enumerable route values
            foreach (var routeValue in routeValues)
            {
                var strValues = routeValue.Value as IEnumerable<string>;
                var intValues = routeValue.Value as IEnumerable<int>;

                if (strValues != null)
                {
                    foreach (var value in strValues)
                    {
                        enumerables.Add(routeValue.Key, value);
                    }
                }
                else if (intValues != null)
                {
                    foreach (var value in intValues)
                    {
                        enumerables.Add(routeValue.Key, string.Format("{0}", value));
                    }
                }
            }

            // removes all enumerable route values so they are not processed by the base class
            foreach (var key in enumerables.AllKeys)
            {
                routeValues.Remove(key);
            }

            // lets the base class generate a URL
            var path = base.GetVirtualPath(requestContext, routeValues);

            var requestUrl = requestContext.HttpContext.Request.Url;
            if (enumerables.Count > 0 && requestUrl != null && path != null)
            {
                var authority = requestUrl.GetLeftPart(UriPartial.Authority);
                var authorityUri = new Uri(authority);
                var url = new Uri(authorityUri, path.VirtualPath);
                var builder = new UriBuilder(url);

                var queryString = HttpUtility.ParseQueryString(builder.Query);

                // extends the URL's query string with the provided enumerable route values
                queryString.Add(enumerables);

                builder.Query = queryString.ToString();

                path.VirtualPath = builder.Uri.PathAndQuery.TrimStart('/');
            }
            return path;
        }
    }
}