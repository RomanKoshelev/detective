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


        [TestCategory("LocalizationTests"), TestMethod()]
        public void TestSetGetTranslation()
        {
            Localizator.SetTranslation("Test:Text1", Lang.En, "Text1");
            Localizator.SetTranslation("Test:Text1", Lang.Ru, "Текст1");

            Localizator.SetTranslation("Test:Text2", Lang.En, "Text2");


            Assert.AreEqual(Localizator.GetTranslation("Test:Text1", Lang.En), "Text1");
            Assert.AreEqual(Localizator.GetTranslation("Test:Text1", Lang.Ru), "Текст1");

            Assert.AreEqual(Localizator.GetTranslation("Test:Text2", Lang.En), "Text2");
            Assert.AreEqual(Localizator.GetTranslation("Test:Text2", Lang.Ru), "#Test:Text2[lang:Ru]");

            Assert.AreEqual(Localizator.GetTranslation("new text", Lang.En), "#{unknown}new text[lang:En]");
        }
    }
}
