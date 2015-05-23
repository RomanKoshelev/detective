// Crimenuts (c) 2015 Krokodev
// Crimenuts.Core.Game
// SimpsonsWorld.cs

using System.Collections.Generic;

namespace Crimenuts.Core.Game.Pack.Worlds
{
    public sealed class SimpsonsWorld : BaseWorld
    {
        public SimpsonsWorld( IList< Profile.Profile > profiles )
            : base( "Simpsons", profiles ) {}

        protected override void LoadSettings()
        {
            LoadDefaultSettings();
            EvidenceRate = 0.4;
        }

        protected override void LoadPersons()
        {
            Persons = new List< Person.Person >();

            // Family
            NormalPerson( "Bart" ).Russian( "����" );
            NormalPerson( "Liza" ).Russian( "����" ).Female();
            NormalPerson( "Homer" ).Russian( "�����" );
            NormalPerson( "Marge" ).Russian( "�����" ).Female();
            NormalPerson( "Maggie" ).Russian( "�����" ).Female();

            // Relatives
            NormalPerson( "Abraham" ).Russian( "�������" );
            NormalPerson( "Selma" ).Russian( "������" ).Female();
            NormalPerson( "Patty" ).Russian( "�����" ).Female();

            // School
            NormalPerson( "Milhouse" ).Russian( "�������" );
            NormalPerson( "Skinner" ).Russian( "�������" );
            NormalPerson( "Edna" ).Russian( "����" ).Female();
            NormalPerson( "Martin" ).Russian( "������" );
            NormalPerson( "Ralph" ).Russian( "�����" );
            NormalPerson( "Nelson" ).Russian( "�������" );

            // Homer's friends
            NormalPerson( "Barney" ).Russian( "�����" );
            NormalPerson( "Moe" ).Russian( "��" );
            NormalPerson( "Lenny" ).Russian( "�����" );
            NormalPerson( "Carl" ).Russian( "����" );

            // Neighbours
            NormalPerson( "Flanders" ).Russian( "��������" );
            NormalPerson( "Todd" ).Russian( "����" );
            NormalPerson( "Rod" ).Russian( "���" );

            // Citizens
            NormalPerson( "Burns" ).Russian( "�����" );
            NormalPerson( "Smithers" ).Russian( "�������" );
            NormalPerson( "Wiggum" ).Russian( "������" );
            NormalPerson( "Snake" ).Russian( "����" );
            NormalPerson( "Apu" ).Russian( "���" );
            NormalPerson( "FatTony" ).Russian( "������ ����" );

            // Celebrities
            NormalPerson( "Krusty" ).Russian( "������" );
            NormalPerson( "Bob" ).Russian( "���" );
            NormalPerson( "Itchy" ).Russian( "�������" );
            NormalPerson( "Scratchy" ).Russian( "�������" );

            // Other
            NormalPerson( "Kang" ).Russian( "����" );
            NormalPerson( "Kodos" ).Russian( "�����" );
        }

        protected override void LoadRelations()
        {
            WorldExtension.World = this;

            // Family
            "Homer"
                .Love( "Bart", "Liza", "Marge", "Maggie", "Abraham", "Moe", "Apu", "Barney", "Carl", "Lenny" )
                .Hate( "Selma", "Patty", "Burns", "Flanders", "Todd", "Rod" );
            "Marge"
                .Love( "Bart", "Liza", "Homer", "Maggie", "Selma", "Patty", "Nelson", "Snake", "Apu" )
                .Hate( "Moe", "Burns", "Barney", "Lenny", "Carl", "FatTony", "Krusty", "Itchy", "Scratchy" );
            "Bart"
                .Love( "Marge", "Homer", "Liza", "Maggie", "Krusty", "Milhouse", "Itchy", "Scratchy", "FatTony" )
                .Hate( "Skinner", "Edna", "Selma", "Patty", "Bob", "Nelson", "Martin", "Ralph", "Todd", "Rod" );
            "Liza"
                .Love( "Marge",
                    "Homer",
                    "Bart",
                    "Maggie",
                    "Abraham",
                    "Krusty",
                    "Itchy",
                    "Scratchy",
                    "Nelson",
                    "Edna",
                    "Skinner" )
                .Hate( "Selma", "Patty", "Burns", "Milhouse", "Bob" );
            "Maggie"
                .Love( "Marge", "Homer", "Bart", "Liza", "Krusty", "Itchy", "Scratchy" )
                .Hate( "Burns" );

            // Relatives
            "Abraham"
                .Love( "Liza", "Homer", "Maggie" )
                .Hate( "Burns" );
            "Selma"
                .Love( "Patty", "Marge", "Maggie", "Bob" )
                .Hate( "Homer" );
            "Patty"
                .Love( "Selma", "Marge", "Maggie", "Skinner" )
                .Hate( "Homer" );

            // School
            "Skinner"
                .Love( "Edna", "Patty", "Liza", "Martin" )
                .Hate( "Bart", "Nelson", "Burns" );
            "Edna"
                .Love( "Skinner", "Liza", "Flanders", "Martin" )
                .Hate( "Bart", "Nelson" );
            "Milhouse"
                .Love( "Bart", "Krusty", "Itchy", "Scratchy", "Liza" )
                .Hate( "Skinner", "Edna", "Nelson", "Martin" );
            "Martin"
                .Love( "Skinner", "Liza", "Edna", "Krusty", "Itchy", "Scratchy" )
                .Hate( "Bart", "Nelson" );
            "Ralph"
                .Love( "Wiggum", "Skinner", "Liza", "Edna", "Krusty", "Itchy", "Scratchy" )
                .Hate( "Nelson" );
            "Nelson"
                .Love( "Itchy", "Scratchy", "Marge", "Krusty", "Liza", "Snake", "FatTony" )
                .Hate( "Skinner", "Edna", "Bart", "Wiggum", "Milhouse", "Martin", "Ralph", "Todd", "Rod" );

            // Homer's friends
            "Barney"
                .Love( "Homer", "Moe", "Carl", "Lenny", "Marge" )
                .Hate();
            "Moe"
                .Love( "Homer", "Barney", "Carl", "Lenny", "Marge" )
                .Hate( "Bart", "Burns", "FatTony", "Snake" );
            "Lenny"
                .Love( "Homer", "Barney", "Moe", "Carl" )
                .Hate( "Burns" );
            "Carl"
                .Love( "Homer", "Barney", "Moe", "Lenny" )
                .Hate( "Burns" );

            // Neighbours
            "Flanders"
                .Love( "Todd", "Rod", "Homer", "Bart", "Liza", "Marge", "Maggie", "Edna", "Burns" )
                .Hate( "Itchy", "Scratchy", "Krusty" );
            "Todd"
                .Love( "Flanders", "Rod", "Krusty", "Itchy", "Scratchy" )
                .Hate();
            "Rod"
                .Love( "Flanders", "Todd", "Krusty", "Itchy", "Scratchy" )
                .Hate();

            // Citizens
            "Burns"
                .Love( "Bart", "Flanders", "Smithers" )
                .HateOthers();
            "Smithers"
                .Love( "Burns" )
                .Hate();
            "Wiggum"
                .Love( "Ralph" )
                .Hate( "Snake", "FatTony", "Bob" );
            "Apu"
                .Love( "Homer", "Marge", "Liza" )
                .Hate( "Snake", "FatTony" );
            "Snake"
                .Love( "Marge", "Bart", "FatTony" )
                .Hate( "Wiggum", "Apu", "Moe", "Burns" );
            "FatTony"
                .Love( "Bart", "Krusty", "Snake" )
                .Hate( "Wiggum", "Apu", "Moe", "Burns" );

            // Celebrities
            "Krusty"
                .Love( "Liza", "Bart", "Itchy", "Scratchy", "FatTony" )
                .Hate( "Bob" );
            "Bob"
                .Love( "Selma" )
                .Hate( "Bart", "Liza", "Homer", "Krusty", "Itchy", "Scratchy", "Wiggum" );
            "Itchy"
                .Love( "Krusty" )
                .Hate( "Scratchy" );
            "Scratchy"
                .Love( "Krusty" )
                .Hate( "Itchy" );

            // Extraterrestrials
            "Kang"
                .Love( "Kodos" )
                .HateOthers();
            "Kodos"
                .Love( "Kang" )
                .HateOthers()
                .IsHatedByOthers();
            "Kang".IsHatedByOthers();
        }
    }
}