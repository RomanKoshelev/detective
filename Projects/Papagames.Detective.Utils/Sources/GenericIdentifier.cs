namespace Papagames.Detective.Utils
{
    public class GenericIdentifier<TV, TC>
    {
        private TV _value;

        public TV Value
        {
            get { return _value; }
            set { _value = value; }
        }

        public GenericIdentifier(TV value)
        {
            _value = value;
        }

        public static implicit operator TV(GenericIdentifier<TV, TC> value)
        {
            return value._value;
        }
        public override string ToString()
        {
            return ReferenceEquals(null, _value) ? null : _value.ToString();
        }
    }

    public class Identifiable<TV, TC>
    {
        public class Identifier : GenericIdentifier<TV, TC>
        {
            public Identifier(TV value)
                : base(value)
            {
            }
            public static explicit operator Identifier(TV value)
            {
                return new Identifier(value);
            }
        }
    }

    // ========================================================================================= []
    // Sample
    internal class GoodProc : Identifiable<int, GoodProc>
    {
        public Identifier Id = new Identifier(0);

    }

    internal class GoodCase : Identifiable<int, GoodCase>
    {
        public Identifier Id = new Identifier(0);
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