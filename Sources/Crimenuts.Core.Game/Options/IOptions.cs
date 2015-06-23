// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// IOptions.cs

using Crimenuts.Core.Game.Packs.Worlds;

namespace Crimenuts.Core.Game.Options
{
    public interface IOptions
    {
        IWorld World { get; }
        int MurderersNum { get; }
        int MembersNum { get; }
        bool PrisonerRoleIsOpen { get; }
        bool VictimRoleIsOpen { get; }
        bool MurderersNumIsOpen { get; }
        bool EvidencesNumIsOpen { get; }
        bool SelectAnyRespondentOnQuestioning { get; }
        bool AutoQuestioningIsEnabled { get; }
        bool EarlyArrestIsEnabled { get; }
    }
}