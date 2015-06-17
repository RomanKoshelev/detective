// Crimenuts (c) 2015 Crocodev
// Crimenuts.App.Web
// MemberModel.cs
// Roman, 2015-03-29 12:56 AM

using Crimenuts.Core.Game;
using Crimenuts.Core.Game.Enums;
using Crimenuts.Core.Game.Members;
using Crimenuts.Utils;
using Crimenuts.Utils.Sex;

namespace Crimenuts.App.Web.Models
{
    public class MemberModel
    {
        // ===================================================================================== []
        // Public
        public MemberModel( Member member )
        {
            Member = member;
        }

        public MemberModel( MemberModel member )
            : this( member.Member ) {}

        public string Name
        {
            get { return Member.Name; }
        }

        public int Number
        {
            get { return Member.Number; }
        }

        public bool IsVictim
        {
            get { return Member.IsVictim; }
        }

        public bool IsActive
        {
            get { return Member.IsActive; }
        }

        public bool IsPrisoner
        {
            get { return Member.IsPrisoner; }
        }

        public bool IsOpenMurderer
        {
            get { return Member.IsOpenMurderer; }
        }

        public bool IsOpenInnocent
        {
            get { return Member.IsOpenInnocent; }
        }

        public string MemberHistoryName
        {
            get { return ( Member.IsMurderer ? "*" : "" ) + Name; }
        }

        public string NameRole
        {
            get { return DoGetNameRole(); }
        }

        public Role Role
        {
            get { return Member.OpenRole; }
        }

        public Sex Sex
        {
            get { return Member.Person.Sex; }
        }

        public override string ToString()
        {
            return Name;
        }

        public int LastActivityaDay
        {
            get { return Member.LastActivityDay; }
        }

        public bool Loves( MemberModel subject )
        {
            return Member.Loves( subject.Member );
        }

        public bool Hates( MemberModel subject )
        {
            return Member.Hates( subject.Member );
        }

        public Emotion ExpressEmotionOnRelationTo( MemberModel subject )
        {
            return Member.ExpressEmotionOnRelationTo( subject.Member );
        }

        public Emotion ExpressEmotionOnArrest( MemberModel subject )
        {
            return Member.ExpressEmotionOnMurderOrArrest( subject.Member );
        }

        public Emotion ExpressEmotionOnMurder( MemberModel subject )
        {
            return Member.ExpressEmotionOnMurderOrArrest( subject.Member );
        }

        // ===================================================================================== []
        // Pivate
        private Member Member { get; set; }

        private string DoGetNameRole()
        {
            if( Role == Role.Unknown ) {
                return Name;
            }
            return string.Format( "{0} [{1}]", Name, Role );
        }
    }
}