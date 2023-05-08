using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MagazinGrafuri.Migrations
{
    /// <inheritdoc />
    public partial class changeGrafic5variable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ClientiDinRomani",
                table: "Grafic5",
                newName: "ClientiDinRomania");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ClientiDinRomania",
                table: "Grafic5",
                newName: "ClientiDinRomani");
        }
    }
}
