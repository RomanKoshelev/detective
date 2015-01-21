namespace Papagames.Detective.Utils
{
    public class Identifier<TV, TC>
    {
        private TV _value;

        public TV Value
        {
            get { return _value; }
            set { _value = value; }
        }

        public Identifier(TV value)
        {
            _value = value;
        }

        public static implicit operator TV(Identifier<TV, TC> value)
        {
            return value._value;
        }

        public static explicit operator Identifier<TV, TC>(TV value)
        {
            return new Identifier<TV, TC>(value);
        }
    }

    public class Identifiable<TV, TC>
    {
        public class Identifier : Identifier<TV, TC>
        {
            public Identifier(TV value)
                : base(value)
            {
            }
        }
    }

    // ========================================================================================= []
    // Sample
    internal class GoodProc : Identifiable<int, GoodProc>
    {
        public Identifier Id;
    }

    internal class GoodCase : Identifiable<int, GoodCase>
    {
        public Identifier Id;
    }

    public class GoodSchema
    {
        private void TestIdentifiers()
        {
            var gproc = new GoodProc();
            var gcase = new GoodCase();

            var procId = gproc.Id;
            var caseId = gcase.Id;

            // Ok
            FindProc(procId);
            FindCase(caseId);

            // Error
            // FindProc(caseId);
            // FindCase(procId);

            int id = gproc.Id;
            gcase.Id = (GoodCase.Identifier)id;
        }

        private void FindProc(GoodProc.Identifier id)
        {
            int _id = id;
        }

        private void FindCase(GoodCase.Identifier id)
        {
            int _id = id;
        }
    }
}