namespace Crimenuts.Core.Game
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