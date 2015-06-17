// Crimenuts (c) 2015 Crocodev
// Crimenuts.Utils
// Languages.cs
// Roman, 2015-03-29 12:57 AM

namespace Crimenuts.Utils.Localization
{
    // ===================================================================================== []
    // Fabric
    internal static class Languages
    {
        public static ILanguage MakeLanguage( Lang lang )
        {
            switch( lang ) {
                case Lang.En :
                    return new EnglishLanguage();
                case Lang.Ru :
                    return new RussianLanguage();
                default :
                    return new DeafaultLanguage();
            }
        }
    }

    // ===================================================================================== []
    // Interface
    internal interface ILanguage
    {
        string GetPluralForm( string noun );
        int GetMinimalPluralNum( int num );
        string GetGenderForm( PartOfSpeach part, string baseForm, Gender gender );
    }

    // ===================================================================================== []
    // Default
    internal class DeafaultLanguage : ILanguage
    {
        public string GetPluralForm( string noun )
        {
            return noun;
        }

        public int GetMinimalPluralNum( int num )
        {
            return 2;
        }

        public string GetGenderForm( PartOfSpeach part, string baseForm, Gender gender )
        {
            return baseForm;
        }
    }

    // ===================================================================================== []
    // English
    internal class EnglishLanguage : ILanguage
    {
        public string GetPluralForm( string noun )
        {
            return string.Format( "{0}s", noun );
        }

        public int GetMinimalPluralNum( int num )
        {
            if( num == Forms.AnyNum ) {
                num = 0;
            }
            if( num == Forms.UnknownNum ) {
                num = 0;
            }
            if( num > 2 ) {
                num = 2;
            }

            return num;
        }

        public string GetGenderForm( PartOfSpeach part, string baseForm, Gender gender )
        {
            return baseForm;
        }
    }

    // ===================================================================================== []
    // Russian
    internal class RussianLanguage : ILanguage
    {
        public string GetPluralForm( string noun )
        {
            return string.Format( "{0}ы", noun );
        }

        public int GetMinimalPluralNum( int num )
        {
            if( num == Forms.UnknownNum ) {
                num = 0;
            }
            if( 10 <= num && num <= 20 ) {
                num = 5;
            }

            switch( num%10 ) {
                case 9 :
                case 8 :
                case 7 :
                case 6 :
                case 5 :
                    return 5;
                case 4 :
                case 3 :
                case 2 :
                    return 2;
                case 1 :
                    return 1;
                case 0 :
                    return 5;
            }
            return 2;
        }

        public string GetGenderForm( PartOfSpeach part, string baseForm, Gender gender )
        {
            switch( part ) {
                case PartOfSpeach.Verb :
                    return GetVerbGenderForm( baseForm, gender );
                case PartOfSpeach.Adjective :
                    return GetAdjectiveGenderForm( baseForm, gender );
            }
            return baseForm;
        }

        public string GetVerbGenderForm( string baseForm, Gender gender )
        {
            switch( gender ) {
                case Gender.Feminine :
                    return baseForm + "а";
                case Gender.Neuter :
                    return baseForm + "о";
            }
            return baseForm;
        }

        public string GetAdjectiveGenderForm( string baseForm, Gender gender )
        {
            switch( gender ) {
                case Gender.Masculine :
                    return baseForm + "ый";
                case Gender.Feminine :
                    return baseForm + "ая";
                case Gender.Neuter :
                    return baseForm + "ое";
            }
            return baseForm;
        }
    }
}