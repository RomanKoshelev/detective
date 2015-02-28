/*namespace Crimenuts.Utils
{
    // Ref: simplify and use struct instead of class
    public class GenericIdentifier<TС, TV>
    {
        private TV _value;

        public TV Value
        {
            get { return _value; }
            set { _value = value; }
        }

        protected GenericIdentifier(TV value)
        {
            _value = value;
        }

        protected GenericIdentifier()
        {
            _value = default(TV);
        }

        public static implicit operator TV(GenericIdentifier<TС, TV> value)
        {
            return value._value;
        }

        public override string ToString()
        {
            // ReSharper disable once AssignNullToNotNullAttribute
            return ReferenceEquals(null, _value) ? null : _value.ToString();
        }

        public static bool operator ==(GenericIdentifier<TС, TV> a, GenericIdentifier<TС, TV> b)
        {
            return a.Equals(b);
        }

        public static bool operator !=(GenericIdentifier<TС, TV> a, GenericIdentifier<TС, TV> b)
        {
            return !a.Equals(b);
        }

        private bool Equals(GenericIdentifier<TС, TV> other)
        {
            if (ReferenceEquals(null, _value))
                return ReferenceEquals(null, other._value);
            return _value.Equals(other._value);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj))
                return false;
            return obj is GenericIdentifier<TС, TV> && Equals((GenericIdentifier<TС, TV>)obj);
        }

        public override int GetHashCode()
        {
            return ReferenceEquals(null, _value) ? 0 : _value.GetHashCode();
        }
    }

    public class Identifiable<TС, TV>
    {
        public class Identifier : GenericIdentifier<TС, TV> 
        {
            private Identifier(TV value)
                : base(value)
            {
            }

            public Identifier()
            {
            }

            public static explicit operator Identifier(TV value)
            {
                return new Identifier(value);
            }
        }
    }
}*/