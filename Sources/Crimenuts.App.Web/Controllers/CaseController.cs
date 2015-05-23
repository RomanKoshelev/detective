// Crimenuts (c) 2015 Crocodev
// Crimenuts.App.Web
// CaseController.cs
// Roman, 2015-03-29 12:56 AM

using System.Web.Mvc;
using Crimenuts.App.Web.Models;
using Crimenuts.Core.Game;
using Crimenuts.Core.Game.Cases;
using Crimenuts.Core.Game.Enums;
using Krokodev.Common.Identifier;

namespace Crimenuts.App.Web.Controllers
{
    public class CaseController : Controller
    {
        public ActionResult Index()
        {
            return View( new SchemaModel() );
        }

        public ActionResult Info( int id )
        {
            var caseId = ( Identifiable< Case, int >.Identifier ) id;
            return View( new CaseModel( caseId ) );
        }

        public ActionResult Run( int id )
        {
            var caseId = ( Identifiable< Case, int >.Identifier ) id;
            var processId = SchemaModel.RunNewProcess( caseId, State.Questioning );

            return RedirectToAction( "Play", "Process", new { id = processId } );
        }

        public ActionResult Relations( int id )
        {
            var caseId = ( Identifiable< Case, int >.Identifier ) id;
            return View( new CaseModel( caseId ) );
        }
    }
}