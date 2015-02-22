using System.Collections.Generic;
using Crimenuts.Utils.Localization;

namespace Crimenuts.Core.Game
{
    public sealed class SimpsonsWorld : BaseWorld
    {
        public SimpsonsWorld(IList<Profile> profiles)
            : base("Simpsons", profiles)
        {
        }

        protected override void LoadSettings()
        {
            LoadDefaultSettings();
            EvidenceRate = 0.4;
        }

        protected override void LoadPersons()
        {
            Persons = new List<Person>();
            // Now: Localization | Simpsons

            // Family
            NormalPerson("Bart").Call(Lang.Ru, @"����");
            NormalPerson("Liza").Call(Lang.Ru, @"����");
            NormalPerson("Homer").Call(Lang.Ru, @"�����");
            NormalPerson("Marge").Call(Lang.Ru, @"�����");
            NormalPerson("Maggie").Call(Lang.Ru, @"�����");

            // Relatives
            NormalPerson("Abraham").Call(Lang.Ru, @"�������");
            NormalPerson("Selma").Call(Lang.Ru, @"������");
            NormalPerson("Patty").Call(Lang.Ru, @"�����");

            // School
            NormalPerson("Milhouse").Call(Lang.Ru, @"�������");
            NormalPerson("Skinner").Call(Lang.Ru, @"�������");
            NormalPerson("Edna").Call(Lang.Ru, @"����");
            NormalPerson("Martin").Call(Lang.Ru, @"������");
            NormalPerson("Ralf").Call(Lang.Ru, @"�����");
            NormalPerson("Nelson").Call(Lang.Ru, @"�������");

            // Homer's friends
            NormalPerson("Barney").Call(Lang.Ru, "�����");
            NormalPerson("Moe").Call(Lang.Ru, "��");
            NormalPerson("Lenny").Call(Lang.Ru, "�����");
            NormalPerson("Carl").Call(Lang.Ru, "����");

            // Neighbours
            NormalPerson("Flanders").Call(Lang.Ru, "��������");
            NormalPerson("Todd").Call(Lang.Ru, "����");
            NormalPerson("Rod").Call(Lang.Ru, "���");

            // Citizens
            NormalPerson("Burns").Call(Lang.Ru, "�����");
            NormalPerson("Smithers").Call(Lang.Ru, "�������");
            NormalPerson("Wiggum").Call(Lang.Ru, "������");
            NormalPerson("Snake").Call(Lang.Ru, "����");
            NormalPerson("Apu").Call(Lang.Ru, "���");
            NormalPerson("Fat Tony").Call(Lang.Ru, "������ ����");

            // Celebrities
            NormalPerson("Krusty").Call(Lang.Ru, "������");
            NormalPerson("Bob").Call(Lang.Ru, "���");
            NormalPerson("Itchy").Call(Lang.Ru, "�������");
            NormalPerson("Scratchy").Call(Lang.Ru, "�������");

            // Other
            NormalPerson("Kang").Call(Lang.Ru, "����");
            NormalPerson("Kodos").Call(Lang.Ru, "�����");
        }

        protected override void LoadRelations()
        {
            WorldExtension.World = this;

            // Family
            "Homer"
                .Love("Bart", "Liza", "Marge", "Maggie", "Abraham", "Moe", "Apu", "Barney", "Carl", "Lenny")
                .Hate("Selma", "Patty", "Burns", "Flanders", "Todd", "Rod");
            "Marge"
                .Love("Bart", "Liza", "Homer", "Maggie", "Selma", "Patty", "Nelson", "Snake", "Apu")
                .Hate("Moe", "Burns", "Barney", "Lenny", "Carl", "Fat Tony", "Krusty", "Itchy", "Scratchy");
            "Bart"
                .Love("Marge", "Homer", "Liza", "Maggie", "Krusty", "Milhouse", "Itchy", "Scratchy", "Fat Tony")
                .Hate("Skinner", "Edna", "Selma", "Patty", "Bob", "Nelson", "Martin", "Ralf", "Todd", "Rod");
            "Liza"
                .Love("Marge", "Homer", "Bart", "Maggie", "Abraham", "Krusty", "Itchy", "Scratchy", "Nelson", "Edna", "Skinner")
                .Hate("Selma", "Patty", "Burns", "Milhouse", "Bob");
            "Maggie"
                .Love("Marge", "Homer", "Bart", "Liza", "Krusty", "Itchy", "Scratchy")
                .Hate("Burns");

            // Relatives
            "Abraham"
                .Love("Liza", "Homer", "Maggie")
                .Hate("Burns");
            "Selma"
                .Love("Patty", "Marge", "Maggie", "Bob")
                .Hate("Homer");
            "Patty"
                .Love("Selma", "Marge", "Maggie", "Skinner")
                .Hate("Homer");

            // School
            "Skinner"
                .Love("Edna", "Patty", "Liza", "Martin")
                .Hate("Bart", "Nelson", "Burns");
            "Edna"
                .Love("Skinner", "Liza", "Flanders", "Martin")
                .Hate("Bart", "Nelson");
            "Milhouse"
                .Love("Bart", "Krusty", "Itchy", "Scratchy", "Liza")
                .Hate("Skinner", "Edna", "Nelson", "Martin");            
            "Martin"
                .Love("Skinner", "Liza", "Edna", "Krusty", "Itchy", "Scratchy")
                .Hate("Bart", "Nelson");
            "Ralf"
                .Love("Wiggum", "Skinner", "Liza", "Edna", "Krusty", "Itchy", "Scratchy")
                .Hate("Nelson");
            "Nelson"
                .Love("Itchy", "Scratchy", "Marge", "Krusty", "Liza", "Snake", "Fat Tony")
                .Hate("Skinner", "Edna", "Bart", "Wiggum", "Milhouse", "Martin", "Ralf", "Todd", "Rod");

            // Homer's friends
            "Barney"
                .Love("Homer", "Moe", "Carl", "Lenny", "Marge")
                .Hate();
            "Moe"
                 .Love("Homer", "Barney", "Carl", "Lenny", "Marge")
                 .Hate("Bart", "Burns", "Fat Tony", "Snake");
            "Lenny"
                 .Love("Homer", "Barney", "Moe", "Carl")
                 .Hate("Burns");
            "Carl"
                 .Love("Homer", "Barney", "Moe", "Lenny")
                 .Hate("Burns");
            
            // Neighbours
            "Flanders"
                 .Love("Todd", "Rod", "Homer", "Bart", "Liza", "Marge", "Maggie", "Edna", "Burns")
                 .Hate("Itchy", "Scratchy", "Krusty");
            "Todd"
                 .Love("Flanders", "Rod", "Krusty", "Itchy", "Scratchy")
                 .Hate();
            "Rod"
                 .Love("Flanders", "Todd", "Krusty", "Itchy", "Scratchy")
                 .Hate();

            // Citizens
            "Burns"
                .Love("Bart", "Flanders", "Smithers")
                .HateOthers();
            "Smithers"
                .Love("Burns")
                .Hate();
            "Wiggum"
                .Love("Ralf")
                .Hate("Snake", "Fat Tony", "Bob");
            "Apu"
                .Love("Homer", "Marge", "Liza")
                .Hate("Snake", "Fat Tony");            
            "Snake"
                .Love("Marge", "Bart", "Fat Tony")
                .Hate("Wiggum", "Apu", "Moe", "Burns"); 
            "Fat Tony"
                .Love("Bart", "Krusty", "Snake")
                .Hate("Wiggum", "Apu", "Moe", "Burns");

            // Celebrities
            "Krusty"
                .Love("Liza", "Bart", "Itchy", "Scratchy", "Fat Tony")
                .Hate("Bob");
            "Bob"
                .Love("Selma")
                .Hate("Bart", "Liza", "Homer", "Krusty", "Itchy", "Scratchy", "Wiggum");
            "Itchy"
                .Love("Krusty")
                .Hate("Scratchy");
            "Scratchy"
                .Love("Krusty")
                .Hate("Itchy");

            // Extraterrestrials
            "Kang"
                .Love("Kodos")
                .HateOthers();
            "Kodos"
                .Love("Kang")
                .HateOthers()
                .IsHatedByOthers();
            "Kang".IsHatedByOthers();

        }
    }
}