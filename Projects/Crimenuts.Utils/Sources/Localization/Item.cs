using System.Collections.Generic;

namespace Crimenuts.Utils.Localization
{
    public class Item
    {
        private readonly Dictionary<Lang, string> _texts = new Dictionary<Lang, string>();
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
            return _texts.ContainsKey(lang) ? _texts[lang] : NotFound(lang);
        }

        // ===================================================================================== []
        // Set
        public void SetTranslation(Lang lang, string text)
        {
            _texts[lang] = text;
        }
        public Item Set(Lang lang, string text)
        {
            SetTranslation(lang, text);
            return this;
        }
        
        // ===================================================================================== []
        // NotFound
        private string NotFound(Lang lang)
        {
            return string.Format("#{0}[lang:{1}]", _key, lang);
        }
    }
}