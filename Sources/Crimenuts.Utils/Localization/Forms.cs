// Crimenuts (c) 2015 Crocodev
// Crimenuts.Utils
// Forms.cs
// Roman, 2015-03-29 12:57 AM

using System.Collections.Generic;

namespace Crimenuts.Utils.Localization
{
    public class Forms
    {
        public Forms( Lang lang, PartOfSpeach part )
        {
            _language = Languages.MakeLanguage( lang );
            _part = part;
        }

        public const int AnyNum = 2;
        public const int UnknownNum = -1;
        private readonly ILanguage _language;
        private readonly PartOfSpeach _part;

        public string Standart { get; set; }

        // ===================================================================================== []
        // Plural
        private readonly Dictionary< int, string > _plural = new Dictionary< int, string >();

        public void SetPlural( int? num, string noun )
        {
            var key = num ?? UnknownNum;
            _plural[ key ] = noun;
        }

        public string GetPlural( int? argNum )
        {
            var num = argNum ?? UnknownNum;

            if( !_plural.ContainsKey( num ) ) {
                num = _language.GetMinimalPluralNum( num );
            }
            if( !_plural.ContainsKey( num ) ) {
                if( num == 1 ) {
                    return Standart;
                }
                return _language.GetPluralForm( Standart );
            }
            return _plural[ num ];
        }

        // ===================================================================================== []
        // Gender
        private readonly Dictionary< Gender, string > _gender = new Dictionary< Gender, string >();

        public void SetGender( Gender gender, string verb )
        {
            _gender[ gender ] = verb;
        }

        public string GetGender( Gender gender )
        {
            if( _gender.ContainsKey( gender ) ) {
                return _gender[ gender ];
            }
            return _language.GetGenderForm( _part, Standart, gender );
        }
    }
}