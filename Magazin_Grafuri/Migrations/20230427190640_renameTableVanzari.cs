using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MagazinGrafuri.Migrations
{
    /// <inheritdoc />
    public partial class renameTableVanzari : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_VanzariToatale",
                table: "VanzariToatale");

            migrationBuilder.RenameTable(
                name: "VanzariToatale",
                newName: "VanzariTotale");

            migrationBuilder.AddPrimaryKey(
                name: "PK_VanzariTotale",
                table: "VanzariTotale",
                column: "ID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_VanzariTotale",
                table: "VanzariTotale");

            migrationBuilder.RenameTable(
                name: "VanzariTotale",
                newName: "VanzariToatale");

            migrationBuilder.AddPrimaryKey(
                name: "PK_VanzariToatale",
                table: "VanzariToatale",
                column: "ID");
        }
    }
}
