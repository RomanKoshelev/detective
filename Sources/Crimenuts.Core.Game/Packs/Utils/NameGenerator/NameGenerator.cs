﻿// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// NameGenerator.cs

using System;
using System.Collections.Generic;
using Crimenuts.Utils;
using Crimenuts.Utils.Extensions;

namespace Crimenuts.Core.Game.Packs.Utils.NameGenerator
{
    public partial class NameGenerator
    {
        private readonly List< string > _firstNames = new List< string >();
        private readonly List< string > _lastNames = new List< string >();
        private readonly Random _random;

        public NameGenerator( Random random = null )
        {
            _random = random ?? new Random();
            InitLastNames();
            InitFirstNames();
        }

        public string MakeLastName()
        {
            return _lastNames.RandomElementUsing( _random );
        }

        public string MakeFirstName()
        {
            return _firstNames.RandomElementUsing( _random );
        }

        public string MakeFullName()
        {
            var name = _lastNames.RandomElementUsing( _random );
            var firstName = _firstNames.RandomElementUsing( _random );
            return string.Format( "{0} {1}", firstName, name );
        }

        public string MakeInitialsName()
        {
            var name = _lastNames.RandomElementUsing( _random );
            var firstName = _firstNames.RandomElementUsing( _random );
            return string.Format( "{0}.{1}", firstName.Substring( 0, 1 ), name );
        }

        private void AddFirstName( string name )
        {
            _firstNames.Add( name.Substring( 0, 1 ) + name.Substring( 1 ).ToLower() );
        }
    }
}