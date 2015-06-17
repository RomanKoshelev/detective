// Crimenuts (c) 2015 Crocodev
// Crimenuts.Utils
// Item.cs
// Roman, 2015-03-29 12:57 AM

using System.Collections.Generic;

namespace Crimenuts.Utils.Localization
{
    public class Item
    {
        private readonly Dictionary< Lang, Forms > _forms = new Dictionary< Lang, Forms >();
        private readonly string _key;

        // ===================================================================================== []
        // Constructor
        public Item( string key )
        {
            _key = key;
            SetTranslation( Lang.Default, key );
        }

        // ===================================================================================== []
        // Get
        public string GetTranslation( Lang lang )
        {
            return _forms.ContainsKey( lang ) ? _forms[ lang ].Standart : NotFound( lang );
        }

        // ===================================================================================== []
        // Set
        public void SetTranslation( Lang lang, string text )
        {
            _forms[ lang ] = new Forms( lang, _part ) { Standart = text };
        }

        public Item Set( Lang lang, string text )
        {
            SetTranslation( lang, text );
            return this;
        }

        public Item Set( Lang lang )
        {
            SetTranslation( lang, _key );
            return this;
        }

        // ===================================================================================== []
        // Plural
        public Item Plural( Lang lang, string form )
        {
            return Plural( lang, Forms.AnyNum, form );
        }

        public Item Plural( Lang lang, int? num, string form )
        {
            _forms[ lang ].SetPlural( num, form );
            return this;
        }

        public string GetPluralForm( Lang lang, int? num )
        {
            return _forms.ContainsKey( lang ) ? _forms[ lang ].GetPlural( num ) : NotFound( lang );
        }

        // ===================================================================================== []
        // Gender
        public Item Gender( Lang lang, Gender gender, string form )
        {
            _forms[ lang ].SetGender( gender, form );
            return this;
        }

        public string GetGenderForm( Lang lang, Gender gender )
        {
            return _forms.ContainsKey( lang ) ? _forms[ lang ].GetGender( gender ) : NotFound( lang );
        }

        // ===================================================================================== []
        // Parts
        private PartOfSpeach _part = PartOfSpeach.Unknown;

        public Item Verb()
        {
            _part = PartOfSpeach.Verb;
            return this;
        }

        public Item Adjective()
        {
            _part = PartOfSpeach.Adjective;
            return this;
        }

        public Item Noun()
        {
            _part = PartOfSpeach.Noun;
            return this;
        }

        // ===================================================================================== []
        // NotFound
        private string NotFound( Lang lang )
        {
            return string.Format( "#{0}[lang:{1}]#", _key, lang );
        }
    }
}