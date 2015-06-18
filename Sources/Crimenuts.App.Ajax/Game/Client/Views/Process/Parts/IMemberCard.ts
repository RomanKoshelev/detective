module Crimenuts.View.Process {
    export interface IMemberCard {
        setMember( memberId: number );
        setCommand( command: Command );
        getAnswerCard( ) : IMemberCard;
        getMemberId( ) : number;
    }
}