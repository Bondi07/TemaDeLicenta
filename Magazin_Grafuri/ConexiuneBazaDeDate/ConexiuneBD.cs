using CsvHelper;
using CsvHelper.Configuration;
using ExcelDataReader;
using Magazin_Grafuri.Context;
using Magazin_Grafuri.Raspunsuri;
using Magazin_Grafuri.Tabele;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System.Data;
using System.Formats.Asn1;
using System.Globalization;
using System.IO;
using System.Reflection;
using System.Text;
using System.Threading;

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
            dbContext.VanzariTotale.AddRange(vanzariTotale);
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

        public List<Produse> GetProduse(int take, int skip)
        {
            return dbContext.Produse.Skip(skip).Take(take).ToList();
        }

        public TotalProduse GetTotalProduse()
        {
            return new TotalProduse { Numar = dbContext.Produse.Count() };
        }

        public List<VanzariSaptamanale> GetVanzariSaptamanale()
        {
            return dbContext.VanzariSaptamanale.ToList();
        }

        public List<VanzariTotale> GetVanzariTotale()
        {
            return dbContext.VanzariTotale.ToList();
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


        public bool ImportTable(IFormFile tableData, string tableName)
        {
            switch (tableName)
            {
                //dashboard venit

                case "Venit":
                    var Dashboard = ReadCsvAsync<Dashboard>(tableData).Result;
                    dbContext.Dashboard.RemoveRange(dbContext.Dashboard.ToList());
                    dbContext.Dashboard.AddRange(Dashboard);
                    dbContext.SaveChanges();
                    break;


                //dashboard chart's

                case "Chart1 - Vanzari saptamanale":
                    var VanzariSaptamanale = ReadCsvAsync<VanzariSaptamanale>(tableData).Result;
                    dbContext.VanzariSaptamanale.RemoveRange(dbContext.VanzariSaptamanale.ToList());
                    dbContext.VanzariSaptamanale.AddRange(VanzariSaptamanale);
                    dbContext.SaveChanges();
                    break;


                case "Chart2 - Vanzari saptamanale":
                    var VanzariSaptamanale1 = ReadCsvAsync<VanzariSaptamanale>(tableData).Result;
                    dbContext.VanzariSaptamanale.RemoveRange(dbContext.VanzariSaptamanale.ToList());
                    dbContext.VanzariSaptamanale.AddRange(VanzariSaptamanale1);
                    dbContext.SaveChanges();
                    break;

                //line chart's

                case "Line charts - Chart 1 - Profit intr-o singura zi pe parcursul saptamanii":
                    var VanzariSaptamanale2 = ReadCsvAsync<VanzariSaptamanale>(tableData).Result;
                    dbContext.VanzariSaptamanale.RemoveRange(dbContext.VanzariSaptamanale.ToList());
                    dbContext.VanzariSaptamanale.AddRange(VanzariSaptamanale2);
                    dbContext.SaveChanges();
                    break;

                case "Line charts - Chart 2 - Castiguri pe parcursul unei luni a anului":
                    var VanzariTotale = ReadCsvAsync<VanzariTotale>(tableData).Result;
                    dbContext.VanzariTotale.RemoveRange(dbContext.VanzariTotale.ToList());
                    dbContext.VanzariTotale.AddRange(VanzariTotale);
                    dbContext.SaveChanges();
                    break;


                case "Line charts - Chart 3 - Castiguri pe ror parcursul anului 2021.":
                    var VanzariTotale1 = ReadCsvAsync<VanzariTotale>(tableData).Result;
                    dbContext.VanzariTotale.RemoveRange(dbContext.VanzariTotale.ToList());
                    dbContext.VanzariTotale.AddRange(VanzariTotale1);
                    dbContext.SaveChanges();
                    break;

                case "Line charts - Chart 4 - Banii cheltuiti pentru achizitionarea de bunuri si castiguri minime din acele bunuri":
                    var Grafic3 = ReadCsvAsync<Grafic3>(tableData).Result;
                    dbContext.Grafic3.RemoveRange(dbContext.Grafic3.ToList());
                    dbContext.Grafic3.AddRange(Grafic3);
                    dbContext.SaveChanges();
                    break;


                case "Line charts - Chart 5 - Castiguri pe parcursul unei zile":
                    var Grafic7 = ReadCsvAsync<Grafic7>(tableData).Result;
                    dbContext.Grafic7.RemoveRange(dbContext.Grafic7.ToList());
                    dbContext.Grafic7.AddRange(Grafic7);
                    dbContext.SaveChanges();
                    break;


                    //bar chart's

                case "Bar charts - Chart 1 - Banii cheltuiti pentru achizitionarea de bunuri si castiguri minime din acele bunuri":
                    var Grafic3BarCharts = ReadCsvAsync<Grafic3>(tableData).Result;
                    dbContext.Grafic3.RemoveRange(dbContext.Grafic3.ToList());
                    dbContext.Grafic3.AddRange(Grafic3BarCharts);
                    dbContext.SaveChanges();
                    break;

                case "Bar charts - Chart 2 - Castiguri pe prcursul unei zile din intreaga saptamana":
                    var Grafic7BarCharts = ReadCsvAsync<Grafic7>(tableData).Result;
                    dbContext.Grafic7.RemoveRange(dbContext.Grafic7.ToList());
                    dbContext.Grafic7.AddRange(Grafic7BarCharts);
                    dbContext.SaveChanges();
                    break;


                case "Bar charts - Chart 3 - Numar de angajati, numar de masini si numarul de magazine din firma \"BONDI\"":
                    var Grafic1BarCharts = ReadCsvAsync<Grafic1>(tableData).Result;
                    dbContext.Grafic1.RemoveRange(dbContext.Grafic1.ToList());
                    dbContext.Grafic1.AddRange(Grafic1BarCharts);
                    dbContext.SaveChanges();
                    break;

                case "Bar charts - Chart 4 - Numar de vizite in fiecare zi in magazinul nostru":
                    var Grafic8BarCharts = ReadCsvAsync<Grafic8>(tableData).Result;
                    dbContext.Grafic8.RemoveRange(dbContext.Grafic8.ToList());
                    dbContext.Grafic8.AddRange(Grafic8BarCharts);
                    dbContext.SaveChanges();
                    break;


                case "Bar charts - Chart 5 - Castiguri pe tot parcusul anului 2021. in dinari(DIN)":
                    var VanzariTotaleBarCharts = ReadCsvAsync<VanzariTotale>(tableData).Result;
                    dbContext.VanzariTotale.RemoveRange(dbContext.VanzariTotale.ToList());
                    dbContext.VanzariTotale.AddRange(VanzariTotaleBarCharts);
                    dbContext.SaveChanges();
                    break;

                //Area chart's

                case "Area charts - Chart 1 - Bani cheltuiti pe marfa si profit":
                    var Grafic3AreaCharts = ReadCsvAsync<Grafic3>(tableData).Result;
                    dbContext.Grafic3.RemoveRange(dbContext.Grafic3.ToList());
                    dbContext.Grafic3.AddRange(Grafic3AreaCharts);
                    dbContext.SaveChanges();
                    break;

                case "Area charts - Chart 2 - Diferenta dinte clienti multumiti si clienti nemultumiti":
                    var Grafic4AreaCharts = ReadCsvAsync<Grafic4>(tableData).Result;
                    dbContext.Grafic4.RemoveRange(dbContext.Grafic4.ToList());
                    dbContext.Grafic4.AddRange(Grafic4AreaCharts);
                    dbContext.SaveChanges();
                    break;

                case "Area charts - Chart 3 - Clientii nostri din diverse tari Europeane":
                    var Grafic5AreaCharts = ReadCsvAsync<Grafic5>(tableData).Result;
                    dbContext.Grafic5.RemoveRange(dbContext.Grafic5.ToList());
                    dbContext.Grafic5.AddRange(Grafic5AreaCharts);
                    dbContext.SaveChanges();
                    break;

                //pi chasrt's
                case "Pi charts - Chart 1 - Profitul intr-o singura zi pe parcusul saptamanii si vanzari totale intr-o zi":
                    var VanzariSaptamanalePiCharts = ReadCsvAsync<VanzariSaptamanale>(tableData).Result;
                    dbContext.VanzariSaptamanale.RemoveRange(dbContext.VanzariSaptamanale.ToList());
                    dbContext.VanzariSaptamanale.AddRange(VanzariSaptamanalePiCharts);
                    dbContext.SaveChanges();
                    break;

                case "Pi charts - Chart 2 - Castiguri pe parcursul unei zile":
                    var Grafic7PiCharts = ReadCsvAsync<Grafic7>(tableData).Result;
                    dbContext.Grafic7.RemoveRange(dbContext.Grafic7.ToList());
                    dbContext.Grafic7.AddRange(Grafic7PiCharts);
                    dbContext.SaveChanges();
                    break;

                case "Pi charts - Chart 3 - Numarul de vizite pe parcusul unei zile pe saptamana":
                    var Grafic8PiCharts = ReadCsvAsync<Grafic8>(tableData).Result;
                    dbContext.Grafic8.RemoveRange(dbContext.Grafic8.ToList());
                    dbContext.Grafic8.AddRange(Grafic8PiCharts);
                    dbContext.SaveChanges();
                    break;

                case "Pi charts - Chart 4 - Numarul de produse vandute lunar, venit anual, venit lunar, si numar de tranzactii intro luna":
                    var DashboardPiChart = ReadCsvAsync<Dashboard>(tableData).Result;
                    dbContext.Dashboard.RemoveRange(dbContext.Dashboard.ToList());
                    dbContext.Dashboard.AddRange(DashboardPiChart);
                    dbContext.SaveChanges();
                    break;

                //Doughnut chart's
                case "Doughnut Charts - Chart 1 - Bani cheltuiti pentru achizitionarea de bunuri si castigurile minime din acele bunurir":
                    var Grafic3DCharts = ReadCsvAsync<Grafic3>(tableData).Result;
                    dbContext.Grafic3.RemoveRange(dbContext.Grafic3.ToList());
                    dbContext.Grafic3.AddRange(Grafic3DCharts);
                    dbContext.SaveChanges();
                    break;

                case "Doughnut Charts - Chart 2 - Numarul de produse vandute lunar, venit anual, venit lunar, si numar de tranzactii intro luna":
                    var DashboardDCharts = ReadCsvAsync<Dashboard>(tableData).Result;
                    dbContext.Dashboard.RemoveRange(dbContext.Dashboard.ToList());
                    dbContext.Dashboard.AddRange(DashboardDCharts);
                    dbContext.SaveChanges();
                    break;

                case "Doughnut Charts - Chart 3 - Profituri intr-o singura zi pe parcursul saptamanii":
                    var VanzariSaptamanaleDCharts = ReadCsvAsync<VanzariSaptamanale>(tableData).Result;
                    dbContext.VanzariSaptamanale.RemoveRange(dbContext.VanzariSaptamanale.ToList());
                    dbContext.VanzariSaptamanale.AddRange(VanzariSaptamanaleDCharts);
                    dbContext.SaveChanges();
                    break;

                case "Doughnut Charts - Chart 4 - Castiguri pe parcursul unei luni a anului":
                    var VanzariTotaleDCharts = ReadCsvAsync<VanzariTotale>(tableData).Result;
                    dbContext.VanzariTotale.RemoveRange(dbContext.VanzariTotale.ToList());
                    dbContext.VanzariTotale.AddRange(VanzariTotaleDCharts);
                    dbContext.SaveChanges();
                    break;

                //Mixed chart's
                case "Mixed Charts - Chart 1 - Nuamr de clienti care sunt multumiti si numarul de clienti care sunt nemultumiti":
                    var Grafic4MixedCharts = ReadCsvAsync<Grafic4>(tableData).Result;
                    dbContext.Grafic4.RemoveRange(dbContext.Grafic4.ToList());
                    dbContext.Grafic4.AddRange(Grafic4MixedCharts);
                    dbContext.SaveChanges();
                    break;

                case "Mixed Charts - Chart 2 - Banii cheltuiti pentru achizitionarea de bunuri si castiguri minime din acele bunuri":
                    var Grafic3MixedCharts = ReadCsvAsync<Grafic3>(tableData).Result;
                    dbContext.Grafic3.RemoveRange(dbContext.Grafic3.ToList());
                    dbContext.Grafic3.AddRange(Grafic3MixedCharts);
                    dbContext.SaveChanges();
                    break;

                case "Mixed Charts - Chart 3 - Numar de clienti si tara de unde sunt clienti care au vizitat magazinul":
                    var Grafic5MixedCharts = ReadCsvAsync<Grafic5>(tableData).Result;
                    dbContext.Grafic5.RemoveRange(dbContext.Grafic5.ToList());
                    dbContext.Grafic5.AddRange(Grafic5MixedCharts);
                    dbContext.SaveChanges();
                    break;

                case "Mixed Charts - Chart 4 - Numar de clienti din Kladovo si din alte orase":
                    var Grafic6MixedCharts = ReadCsvAsync<Grafic6>(tableData).Result;
                    dbContext.Grafic6.RemoveRange(dbContext.Grafic6.ToList());
                    dbContext.Grafic6.AddRange(Grafic6MixedCharts);
                    dbContext.SaveChanges();
                    break;

                case "Mixed Charts - Chart 5 - Vizite in fiecare zi intr-o saptamana":
                    var Grafic8MixedCharts = ReadCsvAsync<Grafic8>(tableData).Result;
                    dbContext.Grafic8.RemoveRange(dbContext.Grafic8.ToList());
                    dbContext.Grafic8.AddRange(Grafic8MixedCharts);
                    dbContext.SaveChanges();
                    break;

                case "Mixed Charts - Chart 6 - Numar de produs vandute, profit si bani cheltuiti din vinzarea produselor":
                    var VanzariSaptamanaleMixedCharts = ReadCsvAsync<VanzariSaptamanale>(tableData).Result;
                    dbContext.VanzariSaptamanale.RemoveRange(dbContext.VanzariSaptamanale.ToList());
                    dbContext.VanzariSaptamanale.AddRange(VanzariSaptamanaleMixedCharts);
                    dbContext.SaveChanges();
                    break;

                case "Mixed Charts - Chart 7 - Numar de produse vandute si cumparate din Bulgaria si Romania":
                    var Grafic2MixedCharts = ReadCsvAsync<Grafic2>(tableData).Result;
                    dbContext.Grafic2.RemoveRange(dbContext.Grafic2.ToList());
                    dbContext.Grafic2.AddRange(Grafic2MixedCharts);
                    dbContext.SaveChanges();
                    break;

                case "Mixed Charts - Chart 8 - Ore suplimentare si ore lucrate pe saptamana pentru fiecare angajat":
                    var AngajatiiMixedCharts = ReadCsvAsync<Angajati>(tableData).Result;
                    dbContext.Angajati.RemoveRange(dbContext.Angajati.ToList());
                    dbContext.Angajati.AddRange(AngajatiiMixedCharts);
                    dbContext.SaveChanges();
                    break;


                default:
                    return false;
            }
            return true;
        }

        private async Task<List<T>> ReadCsvAsync<T>(IFormFile file) where T : class, new()
        {
            using var stream = file.OpenReadStream();
            using var reader = new StreamReader(stream);

            //var csvReader = new CsvReader(reader, CultureInfo.InvariantCulture);
            var csvConfiguration = new CsvConfiguration(CultureInfo.InvariantCulture)
            {
                HasHeaderRecord = false
            };

            var csvReader = new CsvReader(reader, csvConfiguration);
            await csvReader.ReadAsync();
            var records = await Task.FromResult(csvReader.GetRecordsAsync<T>());

            var results = new List<T>();
            await foreach (var item in records.ConfigureAwait(false))
                results.Add(item);

            return results;
        }

    }
}
