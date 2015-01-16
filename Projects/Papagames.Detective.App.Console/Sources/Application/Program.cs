using System;
using System.Collections.Generic;
using Papagames.Detective.Core;

namespace Papagames.Detective.Presentation.Console
{
    internal partial class Program
    {
        private static void Main()
        {
            try
            {
                var stage = new Player();
                var pack = new Pack();
                var game = new Game(stage, pack.SimpsonsWorld);
                Run(game);
            }
            catch (Exception e)
            {
                PrintException(e);                
            }
        }

        private static void Run(Game game)
        {
            Player.SilenceMode = false;
            Player.AutoMode = true;
            // todo: https://rk-dev.atlassian.net/browse/DET-12


            var gcase = Scheme.NewCase(Scheme.WorldId.Simpsons, 8, 3);
            var gproc = Scheme.NewProcess(gcase);
            var player = new Player();
            player.Run(gproc);


        }
    }


    public static class Scheme
    {
        private static readonly Pack Pack = new Pack();
        private static readonly List<Case> Cases = new List<Case>();
        private static readonly List<Process> Processes = new List<Process>();
        private static readonly IDictionary<WorldId, IWorld> WorldMap = new Dictionary<WorldId, IWorld>();

        static Scheme()
        {
            WorldMap.Add(WorldId.Simpsons, Pack.SimpsonsWorld);
            WorldMap.Add(WorldId.Random, Pack.RandomWorld);
        }
        public static Case NewCase(WorldId worldId, int memberNum, int murderNum)
        {
            var gcase = new Case(WorldMap[worldId], memberNum, murderNum);
            Cases.Add(gcase);
            return gcase;
        }

        public enum WorldId
        {
            Simpsons,
            Random
        }

        public static Process NewProcess(Case gcase)
        {
            var gprocess = new Process(gcase);
            Processes.Add(gprocess);
            return gprocess;
        }
    }

    public class Process
    {
        private Case _case;

        public Process(Case gcase)
        {
            _case = gcase;
        }
    }

    public class Case
    {
        public Case(IWorld world, int memberNum, int murderNum)
        {
            
        }
    }
}