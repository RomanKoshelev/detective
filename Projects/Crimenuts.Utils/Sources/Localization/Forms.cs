using System.Collections.Generic;

namespace Crimenuts.Utils.Localization
{
    public class Forms
    {
        public Forms(Lang lang)
        {
            _language = Languages.MakeLanguage(lang);
        }
        public const int AnyNum = 2;
        public const int UnknownNum = -1;
        private readonly ILanguage _language;

        public string Standart { get; set; }
        private readonly Dictionary<int,string> _plural = new Dictionary<int, string>();

        public void SetPlural(int? num, string noun)
        {
            var key = num ?? UnknownNum;
            _plural[key] = noun;
        }

        public string GetPlural(int? argNum)
        {
            var num = argNum ?? UnknownNum;

            if (!_plural.ContainsKey(num))
            {
                num = _language.GetMinimalPluralNum(num);
            }
            if (!_plural.ContainsKey(num))
            {
                if (num == 1) return Standart;
                return _language.GetPluralForm(Standart);
            }
            return _plural[num];
        }
    }
}