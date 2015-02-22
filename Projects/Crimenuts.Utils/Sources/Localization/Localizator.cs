using System.Collections.Generic;

namespace Crimenuts.Utils.Localization
{
    // Now: Localization | Localizator
    public static class Localizator
    {
        private static readonly Dictionary<string, Item> Items = new Dictionary<string, Item>();
        public static readonly IList<Lang> Languages = new List<Lang>();
        private const string Unknown="{unknown}";

        // ===================================================================================== []
        // Constructor
        static Localizator()
        {
            RegisterLanguage(Lang.En);
            RegisterLanguage(Lang.Ru);
        }
        // ===================================================================================== []
        // SetTranslation
        public static void SetTranslation(string key, Lang lang, string text)
        {
            RegisterLanguage(lang);
            SetItem(key).SetTranslation(lang, text);
        }

        // ===================================================================================== []
        // RegisterLanguage
        private static void RegisterLanguage(Lang lang)
        {
            if (Languages.NotExists(l => l == lang)) Languages.Add(lang);
        }

        // ===================================================================================== []
        // SetItem
        private static Item SetItem(string key)
        {
            if (!Items.ContainsKey(key))
            {
                Items[key] = new Item(key);
            }
            
            return Items[key];
        }        
        // ===================================================================================== []
        // GetItem
        private static Item GetItem(string key)
        {
            return Items.ContainsKey(key) ? Items[key] : new Item(Unknown + key);
        }

        // ===================================================================================== []
        // GetTranslation
        public static string GetTranslation(string key, Lang lang)
        {
            return GetItem(key).GetTranslation(lang);
        }
    }
}