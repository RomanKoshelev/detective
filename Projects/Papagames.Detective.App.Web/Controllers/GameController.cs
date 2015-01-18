﻿using System.Web.Mvc;
using Papagames.Detective.App.Web.Models;

namespace Papagames.Detective.App.Web.Controllers
{
    public class GameController : Controller
    {
        private SchemaModel Schema { get; set; }

        public GameController()
        {
            InitSchemaModel();
        }

        private void InitSchemaModel()
        {
            Schema = new SchemaModel();
        }

        public ActionResult Index()
        {
            return View(Schema);
        }
    }
}
