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
        public static Gender ToGender(this Sex sex)
        {
            switch (sex)
            {
                case Sex.Unknown:
                    return Gender.Unknown;
                case Sex.Female:
                    return Gender.Feminine;
                case Sex.Male:
                    return Gender.Masculine;
                case Sex.None:
                    return Gender.Neuter;
            }
            return Gender.Unknown;;
        }
    }
}