// Crimenuts (c) 2015 Crocodev
// Crimenuts.Utils
// Gender.cs
// Roman, 2015-03-29 12:57 AM

namespace Crimenuts.Utils.Localization
{
    public enum Gender
    {
        Unknown,
        Feminine,
        Masculine,
        Neuter
    }

    public static class GenderExtension
    {
        public static Gender ToGender( this Sex.Sex sex )
        {
            switch( sex ) {
                case Sex.Sex.Unknown :
                    return Gender.Unknown;
                case Sex.Sex.Female :
                    return Gender.Feminine;
                case Sex.Sex.Male :
                    return Gender.Masculine;
                case Sex.Sex.None :
                    return Gender.Neuter;
            }
            return Gender.Unknown;
            ;
        }
    }
}