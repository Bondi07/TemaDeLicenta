using Magazin_Grafuri.Raspunsuri;
using Magazin_Grafuri.Tabele;

namespace Magazin_Grafuri.ConexiuneBazaDeDate
{
    public interface IConexiuneBD
    {
        public void AddAngajat(ICollection<Angajati> angajat);

        public void AddDashboard(ICollection<Dashboard> dashboard);

        public void AddProduse(ICollection<Produse> produse);

        public void AddVanzariSaptamanale(ICollection<VanzariSaptamanale> vanzariSaptamanale);

        public void AddVanzariTotale(ICollection<VanzariTotale> vanzariTotale);

        public void AddGrafic1(ICollection<Grafic1> Grafic1);

        public void AddGrafic2(ICollection<Grafic2> Grafic2);

        public void AddGrafic3(ICollection<Grafic3> Grafic3);

        public void AddGrafic4(ICollection<Grafic4> Grafic4);

        public void AddGrafic5(ICollection<Grafic5> Grafic5);

        public void AddGrafic6(ICollection<Grafic6> Grafic6);

        public void AddGrafic7(ICollection<Grafic7> Grafic7);

        public void AddGrafic8(ICollection<Grafic8> Grafic8);


        public List<Angajati> GetAngajati();

        public List<Dashboard> GetDashboard();

        public List<Produse> GetProduse(int take, int skip);
        public TotalProduse GetTotalProduse();

        public List<VanzariSaptamanale> GetVanzariSaptamanale();

        public List<VanzariTotale> GetVanzariTotale();

        public List<Grafic1> GetGrafic1();

        public List<Grafic2> GetGrafic2();

        public List<Grafic3> GetGrafic3();

        public List<Grafic4> GetGrafic4();

        public List<Grafic5> GetGrafic5();

        public List<Grafic6> GetGrafic6();

        public List<Grafic7> GetGrafic7();

        public List<Grafic8> GetGrafic8();

        public bool ImportTable(IFormFile tableData, string tableName);
    }
}
