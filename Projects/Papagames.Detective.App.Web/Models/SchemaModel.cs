﻿using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Papagames.Detective.Core.Game;

namespace Papagames.Detective.App.Web.Models
{
    public class SchemaModel
    {
        // ===================================================================================== []
        // Publice
        public IList<CaseModel> Cases
        {
            get { return DoGetCases(); }
        }

        // ===================================================================================== []
        // Pivate
        private static IList<CaseModel> DoGetCases()
        {
            return Schema.Cases.Select(c => new CaseModel(c.Id)).ToList();
        }
    }
}