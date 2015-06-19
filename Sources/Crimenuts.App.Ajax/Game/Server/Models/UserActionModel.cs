// Crimenuts (c) 2015 Krokodev
// Crimenuts.App.Ajax
// UserActionModel.cs

using System.Collections.Generic;

namespace Crimenuts.App.Ajax.Game.Server.Models
{
    public class UserActionModel
    {
        public string Type { get; set; }
        public List< int > Args { get; set; }
        public string Description { get; set; }
    }
}