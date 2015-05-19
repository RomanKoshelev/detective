// Crimenuts (c) 2015 Crocodev
// Crimenuts.App.Web
// ImageController.cs
// Roman, 2015-03-29 12:56 AM

using System;
using System.IO;
using System.Web.Mvc;

namespace Crimenuts.App.Web.Controllers
{
    public class ImageController : Controller
    {
        private const int CacheDuration = 86400;

        // ===================================================================================== []
        // World
        [OutputCache( Duration = CacheDuration, VaryByParam = "name" )]
        public ActionResult World( string name )
        {
            var filePath = string.Format( @"Worlds\{0}\Images\world.picture.png", name );
            var fileName = string.Format( "World-{0}-Picture.png", name );

            return ImageActionResult( filePath, fileName );
        }

        // ===================================================================================== []
        // Person
        [OutputCache( Duration = CacheDuration, VaryByParam = "world;name" )]
        public ActionResult Person( string world, string name )
        {
            var filePath = string.Format( @"Worlds\{0}\Persons\{1}\person.picture.png", world, name );
            var fileName = string.Format( "{0}-{1}-Picture.png", world, name );

            return ImageActionResult( filePath, fileName );
        }

        // ===================================================================================== []
        // Utils
        private static ActionResult ImageActionResult( string filePath, string fileName )
        {
            var path = Path.Combine( AppDomain.CurrentDomain.BaseDirectory, "App_Data", filePath );
            var stream = new FileStream( path, FileMode.Open );
            return new FileStreamResult( stream, "image/png" ) {
                FileDownloadName = fileName
            };
        }
    }
}