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
        // SetTranslation
        public static void SetTranslation(string key, Lang lang, string text)
        {
            SetItem(key).SetTranslation(lang, text);
        }
        // ===================================================================================== []
        // Chain Shortcut
        public static Item Set(string key)
        {
            return SetItem(key);
        }

        // ===================================================================================== []
        // RegisterLanguage
        public static void RegisterLanguage(Lang lang)
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