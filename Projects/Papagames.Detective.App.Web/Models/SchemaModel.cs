using System.Collections;
using System.Collections.Generic;
using Papagames.Detective.Core.Game;

namespace Papagames.Detective.App.Web.Models
{
    public class SchemaModel
    {
        public IList<Case> Cases
        {
            get { return Schema.CasesInfo; }
        }
    }
}