namespace Papagames.Detective.Core.Game
{
    public interface IOptions
    {
        bool PrisonerRoleIsOpen { get; }
        bool VictimRoleIsOpen { get; }
        bool MurderersNumIsOpen { get; }
    }
}