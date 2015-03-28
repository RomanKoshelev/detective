// Crimenuts (c) 2015 Crocodev
// Crimenuts.App.Console
// Player.pvt.Utils.cs
// Roman, 2015-03-29 12:55 AM

using System.Collections.Generic;
using Crimenuts.Core.Game;

namespace Crimenuts.App.Console
{
    internal partial class Player
    {
        private void WaitAndPrintGameAnalize()
        {
            WriteLine();
            PressEnterToContinue();
            WriteHeader( "Discovering" );

            PrintRelations();

            WriteLine();
            PrintEvidences();
            WriteLine();
            PrintEmotions( printAll : true );
            WriteLine();
            PrintAllMembers( printAll : true );
            WriteLine();
            PrintAnswers( isGameOver : true );
            WriteLine();
            PrintHistory();
        }

        private static string NumberOrFullState( Member m )
        {
            return m.IsActive
                ? string.Format( "{0,2}:", m.Number )
                : ( m.IsPrisoner ? "#" : "x" ) + ( m.IsInnocent ? "I " : m.IsMurderer ? "M " : "ERROR" );
        }

        private IList< Member > Members
        {
            get { return _process.Members; }
        }

        public History History
        {
            get { return _process.History; }
        }

        public IList< Member > ActiveMembers
        {
            get { return _process.ActiveMembers; }
        }

        private Member TodayVictim
        {
            get { return _process.TodayVictim; }
        }

        public Member LastArrested
        {
            get { return _process.LastArrested; }
        }

        private State State
        {
            get { return _process.State; }
        }

        public int CurrentDay
        {
            get { return _process.Today; }
        }
    }
}