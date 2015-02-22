using System.Collections.Generic;
using System.Linq;

namespace Crimenuts.Utils.Localization
{
    public static class Localizator
    {
        private static readonly Dictionary<string, Item> Items = new Dictionary<string, Item>();
        public static readonly IList<Lang> Languages = new List<Lang>();

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