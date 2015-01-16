using System.Diagnostics;

namespace Papagames.Detective.Core.Game
{
    public class MurderRule
    {
        public VictimSign[][] VictimSigns;

        public VictimSign GetVictimSign(FactorPriority priority, int order)
        {
            CheckSigns(priority, order);
            return VictimSigns[(int) priority][order - 1];
        }

        private void CheckSigns(FactorPriority priority, int order)
        {
            Trace.Assert(VictimSigns != null, "MurderRule.VictimSigns");
            Trace.Assert(VictimSigns.Length > (int) priority, "MurderRule.VictimSigns.Count");
            Trace.Assert(VictimSigns[(int) priority].Length >= order, "MurderRule.VictimSigns[priority].Count()");
        }

        public void Init(int num1, int num2)
        {
            VictimSigns=new VictimSign[2][];
            VictimSigns[0] = new VictimSign[num1];
            VictimSigns[1] = new VictimSign[num2];
        }
    }
}