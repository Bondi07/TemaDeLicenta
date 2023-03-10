using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MagazinGrafuri.Migrations
{
    /// <inheritdoc />
    public partial class grafice : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Grafic1",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    NrTotalDeAngajati = table.Column<int>(type: "int", nullable: false),
                    NrDeMagazine = table.Column<int>(type: "int", nullable: false),
                    NrDeMasini = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Grafic1", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Grafic2",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    ProduseVanduteInRomania = table.Column<int>(type: "int", nullable: false),
                    ProduseVanduteInBulgaria = table.Column<int>(type: "int", nullable: false),
                    ProduseCumparateDinRomania = table.Column<int>(type: "int", nullable: false),
                    ProduseCumparateDinBulgaria = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Grafic2", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Grafic1");

            migrationBuilder.DropTable(
                name: "Grafic2");
        }
    }
}
