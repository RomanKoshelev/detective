using System.Collections.Generic;

namespace Crimenuts.Utils.Localization
{
    public class Item
    {
        // Now: Localization | Localizator | Item

        private readonly Dictionary<Lang, Forms> _forms = new Dictionary<Lang, Forms>();
        private readonly string _key;

        // ===================================================================================== []
        // Constructor
        public Item(string key)
        {
            _key = key;
            SetTranslation(Lang.Default, key);
        }

        // ===================================================================================== []
        // Get
        public string GetTranslation(Lang lang)
        {
            return _forms.ContainsKey(lang) ? _forms[lang].Standart : NotFound(lang);
        }

        // ===================================================================================== []
        // Set
        public void SetTranslation(Lang lang, string text)
        {
            _forms[lang] = new Forms(lang) {Standart = text};
        }
        public Item Set(Lang lang, string text)
        {
            SetTranslation(lang, text);
            return this;
        }
        public Item Set(Lang lang)
        {
            SetTranslation(lang, _key);
            return this;
        }

        // ===================================================================================== []
        // Plural
        public Item Plural(Lang lang, string noun)
        {
            return Plural(lang, Forms.AnyNum, noun);
        }
        public Item Plural(Lang lang, int? num, string noun)
        {
            _forms[lang].SetPlural(num, noun);
            return this;
        }

        
        // ===================================================================================== []
        // NotFound
        private string NotFound(Lang lang)
        {
            return string.Format("#{0}[lang:{1}]#", _key, lang);
        }

        public string GetPluralForm(Lang lang, int? num)
        {
            return _forms[lang].GetPlural(num);
        }
    }
}