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

        protected GenericIdentifier()
        {
            _value = default(TV);
        }

        public static implicit operator TV(GenericIdentifier<TV, TC> value)
        {
            return value._value;
        }
        public override string ToString()
        {
            // ReSharper disable once AssignNullToNotNullAttribute
            return ReferenceEquals(null, _value) ? null : _value.ToString();
        }

        public static bool operator ==(GenericIdentifier<TV, TC> a, GenericIdentifier<TV, TC> b)
        {
            return a.Equals(b);
        }

        public static bool operator !=(GenericIdentifier<TV, TC> a, GenericIdentifier<TV, TC> b)
        {
            return !a.Equals(b);
        }

        public bool Equals(GenericIdentifier<TV, TC> other)
        {
            if (ReferenceEquals(null, _value))
                return ReferenceEquals(null, other._value);
            return _value.Equals(other._value);
        }
        public override int GetHashCode()
        {
            return ReferenceEquals(null, _value) ? 0 : _value.GetHashCode();
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj))
                return false;
            return obj is GenericIdentifier<TV, TC> && Equals((GenericIdentifier<TV, TC>)obj);
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

            public Identifier()
            {
            }

            public static explicit operator Identifier(TV value)
            {
                return new Identifier(value);
            }
        }
    }
}