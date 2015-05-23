// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// Process.pvt.Members.cs

using System.Collections.Generic;
using System.Linq;
using Crimenuts.Core.Game.Enums;
using MoreLinq;

namespace Crimenuts.Core.Game.Process
{
    public partial class Process
    {
        private List< Member.Member > DoGetActiveMembers()
        {
            return Members.Where( m => m.IsActive ).ToList();
        }

        private List< Member.Member > DoGetActiveMurderers()
        {
            return ActiveMembers.Where( m => m.IsMurderer ).ToList();
        }

        private List< Member.Member > DoGetActiveInnocents()
        {
            return ActiveMembers.Where( m => !m.IsMurderer ).ToList();
        }

        private IList< Member.Member > DoGetVictims()
        {
            return Members.Where( m => m.IsVictim ).ToList();
        }

        private IList< Member.Member > DoGetPrisoners()
        {
            return Members.Where( m => m.IsPrisoner ).ToList();
        }

        private Member.Member Detective
        {
            get { return Case.Detective; }
        }

        private void InitMembers()
        {
            Members = Case.CloneMembersForProcess();
            Members.ForEach( m => m.SetProcess( this ) );
        }

        private Member.Member FindMember( int number )
        {
            return Members.First( m => m.Number == number );
        }

        private void UpdateMembersLastActiviryDay()
        {
            ActiveMembers.ForEach( m => m.LastActivityDay = Today );
        }

        private Member.Member DoGetTodayVictim()
        {
            return History.Records.First( r => r.Action == Action.Murder && r.Day == Today ).Subject;
        }

        private Member.Member DoGetTodayPrisoner()
        {
            return History.Records.First( r => r.Action == Action.Arrest && r.Day == Today ).Subject;
        }
    }
}