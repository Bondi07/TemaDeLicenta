using Magazin_Grafuri.Tabele;
using Microsoft.EntityFrameworkCore;

namespace Magazin_Grafuri.Context
{
    public class MagazinDbContext : DbContext
    {
        public MagazinDbContext(DbContextOptions<MagazinDbContext> options)
              : base(options)
        {
        }


        public DbSet<Angajati> Angajati { get; set; }
        public DbSet<Dashboard> Dashboard { get; set; }
        public DbSet<Produse> Produse { get; set; }
        public DbSet<VanzariSaptamanale> VanzariSaptamanale { get; set; }
        public DbSet<VanzariTotale> VanzariToatale { get; set; }

        public DbSet<Grafic1> Grafic1 { get; set;}
        public DbSet<Grafic2> Grafic2 { get; set;}

        public DbSet<Grafic3> Grafic3 { get; set; }

        public DbSet<Grafic4> Grafic4 { get; set; }

        public DbSet<Grafic5> Grafic5 { get; set; }

        public DbSet<Grafic6> Grafic6 { get; set; }

        public DbSet<Grafic7> Grafic7 { get; set; }

        public DbSet<Grafic8> Grafic8 { get; set; }


    }
}
    