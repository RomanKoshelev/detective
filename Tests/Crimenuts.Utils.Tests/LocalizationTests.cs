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
            Trace.TraceInformation("ClassInitialize");
        }

        [ClassCleanup()]
        public static void ClassCleanup()
        {
            Trace.TraceInformation("ClassCleanup");
        }

        // Now: Localization | Tests
        [TestCategory("Localization Tests"), TestMethod()]
        public void Test_Set_Get_Translation()
        {
            Localizator.Set("Test:Text1").Set(Lang.En, "Text1").Set(Lang.Ru, "Текст1");
            Localizator.SetTranslation("Test:Text2", Lang.En, "Text2");

            Assert.AreEqual(Localizator.GetTranslation("Test:Text1", Lang.En), "Text1");
            Assert.AreEqual(Localizator.GetTranslation("Test:Text1", Lang.Ru), "Текст1");
            Assert.AreEqual(Localizator.GetTranslation("Test:Text2", Lang.En), "Text2");
            Assert.AreEqual(Localizator.GetTranslation("Test:Text2", Lang.Ru), "#Test:Text2[lang:Ru]");
            Assert.AreEqual(Localizator.GetTranslation("new text", Lang.En), "#{unknown}new text[lang:En]");
        }
    }
}
