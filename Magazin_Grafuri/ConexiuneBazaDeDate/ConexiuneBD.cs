using Magazin_Grafuri.Context;
using Magazin_Grafuri.Tabele;

namespace Magazin_Grafuri.ConexiuneBazaDeDate
{
    public class ConexiuneBD : IConexiuneBD
    {
        private MagazinDbContext dbContext;
        public ConexiuneBD(MagazinDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public void AddAngajat(ICollection<Angajati> angajati)
        {
            dbContext.Angajati.AddRange(angajati);
            dbContext.SaveChanges();

        }

        public void AddDashboard(ICollection<Dashboard> dashboard)
        {
            dbContext.Dashboard.AddRange(dashboard);
            dbContext.SaveChanges();

        }
        public void AddProduse(ICollection<Produse> produse)
        {
            dbContext.Produse.AddRange(produse);
            dbContext.SaveChanges();

        }

        public void AddVanzariSaptamanale(ICollection<VanzariSaptamanale> vanzariSaptamanale)
        {
            dbContext.VanzariSaptamanale.AddRange(vanzariSaptamanale);
            dbContext.SaveChanges();

        }

        public void AddVanzariTotale(ICollection<VanzariTotale> vanzariTotale)
        {
            dbContext.VanzariToatale.AddRange(vanzariTotale);
            dbContext.SaveChanges();

        }

        public void AddGrafic1(ICollection<Grafic1> Grafic1)
        {
            dbContext.Grafic1.AddRange(Grafic1);
            dbContext.SaveChanges();

        }

        public void AddGrafic2(ICollection<Grafic2> Grafic2)
        {
            dbContext.Grafic2.AddRange(Grafic2);
            dbContext.SaveChanges();

        }

        public void AddGrafic3(ICollection<Grafic3> Grafic3)
        {
            dbContext.Grafic3.AddRange(Grafic3);
            dbContext.SaveChanges();

        }
        public void AddGrafic4(ICollection<Grafic4> Grafic4)
        {
            dbContext.Grafic4.AddRange(Grafic4);
            dbContext.SaveChanges();

        }

        public void AddGrafic5(ICollection<Grafic5> Grafic5)
        {
            dbContext.Grafic5.AddRange(Grafic5);
            dbContext.SaveChanges();

        }

        public void AddGrafic6(ICollection<Grafic6> Grafic6)
        {
            dbContext.Grafic6.AddRange(Grafic6);
            dbContext.SaveChanges();

        }

        public void AddGrafic7(ICollection<Grafic7> Grafic7)
        {
            dbContext.Grafic7.AddRange(Grafic7);
            dbContext.SaveChanges();

        }

        public void AddGrafic8(ICollection<Grafic8> Grafic8)
        {
            dbContext.Grafic8.AddRange(Grafic8);
            dbContext.SaveChanges();

        }

        public List<Angajati> GetAngajati()
        {
            return dbContext.Angajati.ToList();
        }

        public List<Dashboard> GetDashboard()
        {
            return dbContext.Dashboard.ToList();
        }

        public List<Produse> GetProduse()
        {
            return dbContext.Produse.ToList();
        }

        public List<VanzariSaptamanale> GetVanzariSaptamanale()
        {
            return dbContext.VanzariSaptamanale.ToList();
        }

        public List<VanzariTotale> GetVanzariTotale()
        {
            return dbContext.VanzariToatale.ToList();
        }

        public List<Grafic1> GetGrafic1()
        {
            return dbContext.Grafic1.ToList();
        }

        public List<Grafic2> GetGrafic2()
        {
            return dbContext.Grafic2.ToList();
        }

        public List<Grafic3> GetGrafic3()
        {
            return dbContext.Grafic3.ToList();
        }

        public List<Grafic4> GetGrafic4()
        {
            return dbContext.Grafic4.ToList();
        }

        public List<Grafic5> GetGrafic5()
        {
            return dbContext.Grafic5.ToList();
        }

        public List<Grafic6> GetGrafic6()
        {
            return dbContext.Grafic6.ToList();
        }

        public List<Grafic7> GetGrafic7()
        {
            return dbContext.Grafic7.ToList();
        }

        public List<Grafic8> GetGrafic8()
        {
            return dbContext.Grafic8.ToList();
        }

    }
}
