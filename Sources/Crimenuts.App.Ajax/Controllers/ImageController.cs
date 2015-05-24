// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// ImageController.cs

using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.IO;
using System.Web.Mvc;

namespace Crimenuts.App.Ajax.Controllers
{
    public class ImageController : Controller
    {
        private const int CacheDuration = 86400;

        [OutputCache( Duration = CacheDuration, VaryByParam = "name" )]
        public ActionResult World( string name )
        {
            var filePath = string.Format( @"Worlds\{0}\Images\world.picture.png", name );
            var fileName = string.Format( "World-{0}-Picture.png", name );

            return ImageActionResult( filePath, fileName );
        }

        [OutputCache( Duration = CacheDuration, VaryByParam = "world;name" )]
        public ActionResult Person( string world, string name )
        {
            var filePath = string.Format( @"Worlds\{0}\Persons\{1}\person.picture.png", world, name );
            var fileName = string.Format( "{0}-{1}-Picture.png", world, name );

            return ImageActionResult( filePath, fileName );
        }

        private static ActionResult ImageActionResult( string filePath, string fileName )
        {
            var path = Path.Combine( AppDomain.CurrentDomain.BaseDirectory, "App_Data", filePath );
            var stream = GetImageStream( path ) ;//new FileStream( path, FileMode.Open );

            return new FileStreamResult( stream, "image/png" ) {
                FileDownloadName = fileName
            };
        }

        private static MemoryStream GetImageStream( string path )
        {
            var original = Image.FromFile( path );
            var resized = ResizeImage( original, new Size( 100, 100) );
            var memStream = new MemoryStream();
            resized.Save( memStream, ImageFormat.Png );
            memStream.Seek( 0, SeekOrigin.Begin );
            return memStream;
        }

        private static Image ResizeImage(
            Image image,
            Size size,
            bool preserveAspectRatio = true )
        {
            int newWidth;
            int newHeight;
            if( preserveAspectRatio ) {
                var originalWidth = image.Width;
                var originalHeight = image.Height;
                var percentWidth = ( float ) size.Width/( float ) originalWidth;
                var percentHeight = ( float ) size.Height/( float ) originalHeight;
                var percent = percentHeight < percentWidth ? percentHeight : percentWidth;
                newWidth = ( int ) ( originalWidth*percent );
                newHeight = ( int ) ( originalHeight*percent );
            } else {
                newWidth = size.Width;
                newHeight = size.Height;
            }
            Image newImage = new Bitmap( newWidth, newHeight );
            using( var graphicsHandle = Graphics.FromImage( newImage ) ) {
                graphicsHandle.InterpolationMode = InterpolationMode.HighQualityBicubic;
                graphicsHandle.DrawImage( image, 0, 0, newWidth, newHeight );
            }
            return newImage;
        }
    }
}