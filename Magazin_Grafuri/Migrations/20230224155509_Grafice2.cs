using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MagazinGrafuri.Migrations
{
    /// <inheritdoc />
    public partial class Grafice2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Grafic3",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Zi = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    SumaMarfa = table.Column<int>(type: "int", nullable: false),
                    Profit = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Grafic3", x => x.ID);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Grafic4",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    ClientiMultumiti = table.Column<int>(type: "int", nullable: false),
                    ClientiNemultumiti = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Grafic4", x => x.ID);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Grafic5",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    ClientiDinSerbia = table.Column<int>(type: "int", nullable: false),
                    ClientiDinRomani = table.Column<int>(type: "int", nullable: false),
                    ClientiDinBulgaria = table.Column<int>(type: "int", nullable: false),
                    ClientiDinGermania = table.Column<int>(type: "int", nullable: false),
                    ClientiDinAustria = table.Column<int>(type: "int", nullable: false),
                    ClientiDinUngaria = table.Column<int>(type: "int", nullable: false),
                    ClientiDinFranta = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Grafic5", x => x.ID);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Grafic6",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    ClientiDinKladovo = table.Column<int>(type: "int", nullable: false),
                    ClientiDinBor = table.Column<int>(type: "int", nullable: false),
                    ClientiDinBeograd = table.Column<int>(type: "int", nullable: false),
                    ClientiDinDrobetaTurnSeverin = table.Column<int>(type: "int", nullable: false),
                    ClientiDinZajecar = table.Column<int>(type: "int", nullable: false),
                    ClientiDinCraiova = table.Column<int>(type: "int", nullable: false),
                    ClientiDinBucuresti = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Grafic6", x => x.ID);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Grafic7",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Zi = table.Column<int>(type: "int", nullable: false),
                    VanzariPeZi = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Grafic7", x => x.ID);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Grafic8",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Zi = table.Column<int>(type: "int", nullable: false),
                    Vizite = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Grafic8", x => x.ID);
                })
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Grafic3");

            migrationBuilder.DropTable(
                name: "Grafic4");

            migrationBuilder.DropTable(
                name: "Grafic5");

            migrationBuilder.DropTable(
                name: "Grafic6");

            migrationBuilder.DropTable(
                name: "Grafic7");

            migrationBuilder.DropTable(
                name: "Grafic8");
        }
    }
}
