using System.Diagnostics;
using Crimenuts.Utils.Localization;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Crimenuts.Utils.Tests
{
    [TestClass]
    public class LocalizationTests
    {
        [ClassInitialize()]
        public static void ClassInitialize(TestContext testContext)
        {
            Localizator.RegisterLanguage(Lang.En);
            Localizator.RegisterLanguage(Lang.Ru);

            Trace.TraceInformation("ClassInitialize");
        }

        [ClassCleanup()]
        public static void ClassCleanup()
        {
            Trace.TraceInformation("ClassCleanup");
        }

        // Now: Localization | Tests
        [TestMethod()]
        public void Set_and_Get_Translation()
        {
            Localizator.Set("Test:Text1").Set(Lang.En, "Text1").Set(Lang.Ru, "Текст1");
            Localizator.SetTranslation("Test:Text2", Lang.En, "Text2");

            Assert.AreEqual("Text1", Localizator.GetTranslation("Test:Text1", Lang.En));
            Assert.AreEqual("Текст1", Localizator.GetTranslation("Test:Text1", Lang.Ru));
            Assert.AreEqual("Text2", Localizator.GetTranslation("Test:Text2", Lang.En));
            Assert.AreEqual("#Test:Text2[lang:Ru]#", Localizator.GetTranslation("Test:Text2", Lang.Ru));
            Assert.AreEqual("#unknown:new text[lang:En]#", Localizator.GetTranslation("new text", Lang.En));
        }

        [TestMethod()]
        public void Plural_Noun_En()
        {
            Localizator.Set("murderer")
                .Set(Lang.En)
                .Plural(Lang.En, "murderers");

            Assert.AreEqual("? murderers", Localizator.NumPlural(null, "murderer", Lang.En));
            Assert.AreEqual("0 murderers", Localizator.NumPlural(0, "murderer", Lang.En));
            Assert.AreEqual("1 murderer", Localizator.NumPlural(1, "murderer", Lang.En));
            Assert.AreEqual("2 murderers", Localizator.NumPlural(2, "murderer", Lang.En));
            Assert.AreEqual("99 murderers", Localizator.NumPlural(99, "murderer", Lang.En));
        }

        [TestMethod()]
        public void Plural_Noun_Ru()
        {
            Localizator.Set("cat")
                .Set(Lang.Ru, "кот")
                .Plural(Lang.Ru, 10, "котов");

            Assert.AreEqual("коты", Localizator.Plural(null, "cat", Lang.Ru));
            Assert.AreEqual("кот", Localizator.Plural(1, "cat", Lang.Ru));
            Assert.AreEqual("коты", Localizator.Plural(2, "cat", Lang.Ru));
            Assert.AreEqual("котов", Localizator.Plural(10, "cat", Lang.Ru));

            Localizator.Set("murderer")
                .Set(Lang.Ru, "убийца")
                .Plural(Lang.Ru, 2, "убийцы")
                .Plural(Lang.Ru, 5, "убийц")
                ;
            Assert.AreEqual("? убийц", Localizator.NumPlural(null, "murderer", Lang.Ru));
            Assert.AreEqual("0 убийц", Localizator.NumPlural(0, "murderer", Lang.Ru));
            Assert.AreEqual("1 убийца", Localizator.NumPlural(1, "murderer", Lang.Ru));
            Assert.AreEqual("2 убийцы", Localizator.NumPlural(2, "murderer", Lang.Ru));
            Assert.AreEqual("3 убийцы", Localizator.NumPlural(3, "murderer", Lang.Ru));
            Assert.AreEqual("4 убийцы", Localizator.NumPlural(4, "murderer", Lang.Ru));
            Assert.AreEqual("5 убийц", Localizator.NumPlural(5, "murderer", Lang.Ru));
            Assert.AreEqual("6 убийц", Localizator.NumPlural(6, "murderer", Lang.Ru));
            Assert.AreEqual("7 убийц", Localizator.NumPlural(7, "murderer", Lang.Ru));
            Assert.AreEqual("8 убийц", Localizator.NumPlural(8, "murderer", Lang.Ru));
            Assert.AreEqual("9 убийц", Localizator.NumPlural(9, "murderer", Lang.Ru));
            Assert.AreEqual("10 убийц", Localizator.NumPlural(10, "murderer", Lang.Ru));
            Assert.AreEqual("11 убийц", Localizator.NumPlural(11, "murderer", Lang.Ru));
            Assert.AreEqual("12 убийц", Localizator.NumPlural(12, "murderer", Lang.Ru));
            Assert.AreEqual("13 убийц", Localizator.NumPlural(13, "murderer", Lang.Ru));
            Assert.AreEqual("14 убийц", Localizator.NumPlural(14, "murderer", Lang.Ru));
            Assert.AreEqual("15 убийц", Localizator.NumPlural(15, "murderer", Lang.Ru));
            Assert.AreEqual("16 убийц", Localizator.NumPlural(16, "murderer", Lang.Ru));
            Assert.AreEqual("20 убийц", Localizator.NumPlural(20, "murderer", Lang.Ru));
            Assert.AreEqual("21 убийца", Localizator.NumPlural(21, "murderer", Lang.Ru));
            Assert.AreEqual("22 убийцы", Localizator.NumPlural(22, "murderer", Lang.Ru));
            Assert.AreEqual("23 убийцы", Localizator.NumPlural(23, "murderer", Lang.Ru));
            Assert.AreEqual("24 убийцы", Localizator.NumPlural(24, "murderer", Lang.Ru));
            Assert.AreEqual("25 убийц", Localizator.NumPlural(25, "murderer", Lang.Ru));
            Assert.AreEqual("100 убийц", Localizator.NumPlural(100, "murderer", Lang.Ru));
            Assert.AreEqual("101 убийца", Localizator.NumPlural(101, "murderer", Lang.Ru));
        }

        [TestMethod()]
        public void First_Capital_Letter()
        {
            Localizator.Set("day")
                .Set(Lang.En)
                .Set(Lang.Ru, "день");

            Assert.AreEqual("день", Localizator.GetTranslation("day", Lang.Ru));
            Assert.AreEqual("day", Localizator.GetTranslation("day", Lang.En));
            Assert.AreEqual("День", Localizator.GetTranslation("Day", Lang.Ru));
            Assert.AreEqual("Day", Localizator.GetTranslation("Day", Lang.En));
        }

        [TestMethod()]
        public void Plural_Unknown()
        {
            Assert.AreEqual("#unknown:answer[lang:Ru]#", Localizator.Plural(2, "answer", Lang.Ru));
        }

    }
}