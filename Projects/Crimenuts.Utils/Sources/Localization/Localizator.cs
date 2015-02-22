using System.Collections.Generic;

namespace Crimenuts.Utils.Localization
{
    public static class Localizator
    {
        private static readonly Dictionary<string, Item> Items = new Dictionary<string, Item>();

        // ===================================================================================== []
        // SetTranslation
        public static void SetTranslation(string key, Lang lang, string text)
        {
            SetItem(key).SetTranslation(lang, text);
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
            return Items.ContainsKey(key) ? Items[key] : new Item("{unknown}" + key);
        }

        // ===================================================================================== []
        // GetTranslation
        public static string GetTranslation(string key, Lang lang)
        {
            return GetItem(key).GetTranslation(lang);
        }
    }
}