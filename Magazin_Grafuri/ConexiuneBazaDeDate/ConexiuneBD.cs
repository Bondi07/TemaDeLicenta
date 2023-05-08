using CsvHelper;
using CsvHelper.Configuration;
using ExcelDataReader;
using Magazin_Grafuri.Context;
using Magazin_Grafuri.Modificari;
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
                    var Grafic5AreaCharts = ReadCsvAsync<AreaChartsChart3>(tableData).Result;

                    foreach (var chart in Grafic5AreaCharts)
                    {
                        var grafic5 = dbContext.Grafic5.FirstOrDefault(x => x.ID == chart.ID);
                        if (grafic5 != null)
                        {
                            grafic5.ClientiDinSerbia = chart.ClientiDinSerbia;
                            grafic5.ClientiDinRomania = chart.ClientiDinRomania;
                            grafic5.ClientiDinBulgaria = chart.ClientiDinBulgaria;
                            grafic5.ClientiDinAustria = chart.ClientiDinAustria;

                        }
                        else
                        {
                            dbContext.Grafic5.Add(new Grafic5
                            {

                                ClientiDinSerbia = chart.ClientiDinSerbia,
                                ClientiDinRomania = chart.ClientiDinRomania,
                                ClientiDinBulgaria = chart.ClientiDinBulgaria,
                                ClientiDinAustria = chart.ClientiDinAustria

                            });
                        }
                    }

                    //Grafic5

                    dbContext.SaveChanges();
                    break;




                //pi chasrt's
                case "Pi charts - Chart 1 - Profitul intr-o singura zi pe parcusul saptamanii si vanzari totale intr-o zi":
                    var VanzariSaptamanalePiCharts = ReadCsvAsync<PiChartChart1>(tableData).Result;

                    foreach (var chart in VanzariSaptamanalePiCharts)
                    {
                        var vanzariSaptamanale = dbContext.VanzariSaptamanale.FirstOrDefault(x => x.ID == chart.ID);
                        if (vanzariSaptamanale != null)
                        {
                            vanzariSaptamanale.Zi = chart.Zi;
                            vanzariSaptamanale.Vanzari = chart.Vanzari;
                            vanzariSaptamanale.ProfitPeZi = chart.ProfitPeZi;

                        }
                        else
                        {
                            dbContext.VanzariSaptamanale.Add(new VanzariSaptamanale
                            {

                                Zi = chart.Zi,
                                Vanzari = chart.Vanzari,
                                ProfitPeZi = chart.ProfitPeZi

                            });
                        }
                    }

                    // VanzariSaptamanale


                    dbContext.SaveChanges();
                    break;




                case "Pi charts - Chart 2 - Castiguri pe parcursul unei zile":
                    var Grafic7PiCharts = ReadCsvAsync<PiChartChart2>(tableData).Result;

                    foreach (var chart in Grafic7PiCharts)
                    {
                        var grafic7 = dbContext.Grafic7.FirstOrDefault(x => x.ID == chart.ID);
                        if (grafic7 != null)
                        {
                            grafic7.Zi = chart.Zi;
                            grafic7.VanzariPeZi = chart.VanzariPeZi;

                        }
                        else
                        {
                            dbContext.Grafic7.Add(new Grafic7   
                            {

                                Zi = chart.Zi,
                                VanzariPeZi = chart.VanzariPeZi

                            });
                        }
                    }

                    //Grafic7

                    dbContext.SaveChanges();
                    break;






                case "Pi charts - Chart 3 - Numarul de vizite pe parcusul unei zile pe saptamana":
                    var Grafic8PiCharts = ReadCsvAsync<PiChartChart3>(tableData).Result;


                    foreach (var chart in Grafic8PiCharts)
                    {
                        var grafic8 = dbContext.Grafic8.FirstOrDefault(x => x.ID == chart.ID);
                        if (grafic8 != null)
                        {
                            grafic8.Zi = chart.Zi;
                            grafic8.Vizite = chart.Vizite;

                        }
                        else
                        {
                            dbContext.Grafic8.Add(new Grafic8
                            {

                                Zi = chart.Zi,
                                Vizite = chart.Vizite

                            });
                        }
                    }

                    //Grafic8

                    dbContext.SaveChanges();
                    break;





                case "Pi charts - Chart 4 - Numarul de produse vandute lunar, venit anual, venit lunar, si numar de tranzactii intro luna":
                    var DashboardPiChart = ReadCsvAsync<PiChartChart4>(tableData).Result;

                    foreach (var chart in DashboardPiChart)
                    {
                        var dashboard = dbContext.Dashboard.FirstOrDefault(x => x.ID == chart.ID);
                        if (dashboard != null)
                        {
                            dashboard.VenitAnual = chart.VenitAnual;
                            dashboard.VenitLunar = chart.VenitLunar;
                            dashboard.Tranzactie = chart.Tranzactie;
                            dashboard.ProduseVanduteLunar = chart.ProduseVanduteLunar;

                        }
                        else
                        {
                            dbContext.Dashboard.Add(new Dashboard
                            {

                                VenitAnual = chart.VenitAnual,
                                VenitLunar = chart.VenitLunar,
                                Tranzactie = chart.Tranzactie,
                                ProduseVanduteLunar = chart.ProduseVanduteLunar

                            });
                        }
                    }



                    //Dashboard

                    dbContext.SaveChanges();
                    break;



                //Doughnut chart's
                case "Doughnut charts - Chart 1 - Bani cheltuiti pentru achizitionarea de bunuri si castigurile minime din acele bunurir":
                    var Grafic3DCharts = ReadCsvAsync<DoughnutChartsChart1>(tableData).Result;

                    foreach (var chart in Grafic3DCharts)
                    {
                        var grafic3 = dbContext.Grafic3.FirstOrDefault(x => x.ID == chart.ID);
                        if (grafic3 != null)
                        {
                            grafic3.Zi = chart.Zi;
                            grafic3.SumaMarfa = chart.SumaMarfa;
                            grafic3.Profit = chart.Profit;

                        }
                        else
                        {
                            dbContext.Grafic3.Add(new Grafic3
                            {

                                Zi = chart.Zi,
                                SumaMarfa = chart.SumaMarfa,
                                Profit = chart.Profit

                            });
                        }
                    }

                    //Grafic3

                    dbContext.SaveChanges();
                    break;







                case "Doughnut charts - Chart 2 - Numarul de produse vandute lunar, venit anual, venit lunar, si numar de tranzactii intro luna":
                    var DashboardDCharts = ReadCsvAsync<DoughnutChartsChart2>(tableData).Result;


                    foreach (var chart in DashboardDCharts)
                    {
                        var dashboard = dbContext.Dashboard.FirstOrDefault(x => x.ID == chart.ID);
                        if (dashboard != null)
                        {
                            dashboard.VenitAnual = chart.VenitAnual;
                            dashboard.VenitLunar = chart.VenitLunar;
                            dashboard.Tranzactie = chart.Tranzactie;
                            dashboard.ProduseVanduteLunar = chart.ProduseVanduteLunar;

                        }
                        else
                        {
                            dbContext.Dashboard.Add(new Dashboard
                            {

                                VenitAnual = chart.VenitAnual,
                                VenitLunar = chart.VenitLunar,
                                Tranzactie = chart.Tranzactie,
                                ProduseVanduteLunar = chart.ProduseVanduteLunar

                            });
                        }
                    }

                    //Dashboard

                    dbContext.SaveChanges();
                    break;





                case "Doughnut charts - Chart 3 - Profituri intr-o singura zi pe parcursul saptamanii":
                    var VanzariSaptamanaleDCharts = ReadCsvAsync<DoughnutChartsChart3>(tableData).Result;

                    foreach (var chart in VanzariSaptamanaleDCharts)
                    {
                        var vanzariSaptamanale = dbContext.VanzariSaptamanale.FirstOrDefault(x => x.ID == chart.ID);
                        if (vanzariSaptamanale != null)
                        {
                            vanzariSaptamanale.Zi = chart.Zi;
                            vanzariSaptamanale.Vanzari = chart.Vanzari;
                            vanzariSaptamanale.ProduseVandute = chart.ProduseVandute;
                            vanzariSaptamanale.ProfitPeZi = chart.ProfitPeZi;

                        }
                        else
                        {
                            dbContext.VanzariSaptamanale.Add(new VanzariSaptamanale
                            {

                                Zi = chart.Zi,
                                Vanzari = chart.Vanzari,
                                ProduseVandute = chart.ProduseVandute,
                                ProfitPeZi = chart.ProfitPeZi

                            });
                        }
                    }
                    //VanzariSaptamanale

                    dbContext.SaveChanges();
                    break;






                case "Doughnut charts - Chart 4 - Castiguri pe parcursul unei luni a anului":
                    var VanzariTotaleDCharts = ReadCsvAsync<DoughnutChartsChart4>(tableData).Result;

                    foreach (var chart in VanzariTotaleDCharts)
                    {
                        var vanzariTotale = dbContext.VanzariTotale.FirstOrDefault(x => x.ID == chart.ID);
                        if (vanzariTotale != null)
                        {
                            vanzariTotale.Luna = chart.Luna;
                            vanzariTotale.vanzariTotale = chart.vanzariTotale;

                        }
                        else
                        {
                            dbContext.VanzariTotale.Add(new VanzariTotale
                            {

                                Luna = chart.Luna,
                                vanzariTotale = chart.vanzariTotale

                            });
                        }
                    }

                    //VanzariTotale

                    dbContext.SaveChanges();
                    break;




                //Mixed chart's
                case "Mixed charts - Chart 1 - Nuamr de clienti care sunt multumiti si numarul de clienti care sunt nemultumiti":
                    var Grafic4MixedCharts = ReadCsvAsync<Chart1>(tableData).Result;


                    foreach (var chart in Grafic4MixedCharts)
                    {
                        var grafic4 = dbContext.Grafic4.FirstOrDefault(x => x.ID == chart.ID);
                        if (grafic4 != null)
                        {
                            grafic4.ClientiMultumiti = chart.ClientiMultumiti;
                            grafic4.ClientiNemultumiti = chart.ClientiNemultumiti;


                        }
                        else
                        {
                            dbContext.Grafic4.Add(new Grafic4
                            {

                                ClientiMultumiti = chart.ClientiMultumiti,
                                ClientiNemultumiti = chart.ClientiNemultumiti

                            });
                        }
                    }


                    //Grafic4

                    dbContext.SaveChanges();
                    break;




                case "Mixed charts - Chart 2 - Banii cheltuiti pentru achizitionarea de bunuri si castiguri minime din acele bunuri":
                    var Grafic3MixedCharts = ReadCsvAsync<Chart2>(tableData).Result;

                    foreach (var chart in Grafic3MixedCharts)
                    {
                        var grafic3 = dbContext.Grafic3.FirstOrDefault(x => x.ID == chart.ID);
                        if (grafic3 != null)
                        {
                            grafic3.Zi = chart.Zi;
                            grafic3.SumaMarfa = chart.SumaMarfa;
                            grafic3.Profit = chart.Profit;
                           

                        }
                        else
                        {
                            dbContext.Grafic3.Add(new Grafic3
                            {

                                Zi = chart.Zi,
                                SumaMarfa = chart.SumaMarfa,
                                Profit = chart.Profit

                            });
                        }
                    }

                    // Grafic3

                    dbContext.SaveChanges();
                    break;








                case "Mixed charts - Chart 3 - Numar de clienti si tara de unde sunt clienti care au vizitat magazinul":
                    var Grafic5MixedCharts = ReadCsvAsync<Chart3>(tableData).Result;

                    foreach (var chart in Grafic5MixedCharts)
                    {
                        var grafic5 = dbContext.Grafic5.FirstOrDefault(x => x.ID == chart.ID);
                        if (grafic5 != null)
                        {
                            grafic5.ClientiDinSerbia = chart.ClientiDinSerbia;
                            grafic5.ClientiDinRomania = chart.ClientiDinRomania;
                            grafic5.ClientiDinBulgaria = chart.ClientiDinBulgaria;
                            grafic5.ClientiDinAustria = chart.ClientiDinAustria;

                        }
                        else
                        {
                            dbContext.Grafic5.Add(new Grafic5
                            {

                                ClientiDinSerbia = chart.ClientiDinSerbia,
                                ClientiDinRomania = chart.ClientiDinRomania,
                                ClientiDinBulgaria = chart.ClientiDinBulgaria,
                                ClientiDinAustria = chart.ClientiDinAustria,

                            });
                        }
                    }


                    // Grafic5

                    dbContext.SaveChanges();
                    break;




                case "Mixed charts - Chart 4 - Numar de clienti din Kladovo si din alte orase":
                    var Grafic6MixedCharts = ReadCsvAsync<Chart4>(tableData).Result;


                    foreach (var chart in Grafic6MixedCharts)
                    {
                        var grafic6 = dbContext.Grafic6.FirstOrDefault(x => x.ID == chart.ID);
                        if (grafic6 != null)
                        {
                            grafic6.ClientiDinKladovo = chart.ClientiDinKladovo;
                            grafic6.ClientiDinBor = chart.ClientiDinBor;
                            grafic6.ClientiDinDrobetaTurnSeverin = chart.ClientiDinDrobetaTurnSeverin;
                            grafic6.ClientiDinCraiova = chart.ClientiDinCraiova;

                        }
                        else
                        {
                            dbContext.Grafic6.Add(new Grafic6
                            {

                                ClientiDinKladovo = chart.ClientiDinKladovo,
                                ClientiDinBor = chart.ClientiDinBor,
                                ClientiDinDrobetaTurnSeverin = chart.ClientiDinDrobetaTurnSeverin,
                                ClientiDinCraiova = chart.ClientiDinCraiova,

                            });
                        }
                    }

                    dbContext.SaveChanges();
                    break;

                //Grafic6



                case "Mixed charts - Chart 5 - Vizite in fiecare zi intr-o saptamana":
                    var Grafic8MixedCharts = ReadCsvAsync<Chart5>(tableData).Result;


                    foreach (var chart in Grafic8MixedCharts)
                    {
                        var grafic8 = dbContext.Grafic8.FirstOrDefault(x => x.ID == chart.ID);
                        if (grafic8 != null)
                        {
                            grafic8.Zi = chart.Zi;
                            grafic8.Vizite = chart.Vizite;

                        }
                        else
                        {
                            dbContext.Grafic8.Add(new Grafic8
                            {

                                Zi = chart.Zi,
                                Vizite = chart.Vizite,

                            });
                        }
                    }

                    //Grafic8


                    dbContext.SaveChanges();
                    break;




                case "Mixed charts - Chart 6 - Numar de produs vandute, profit si bani cheltuiti din vinzarea produselor":
                    var VanzariSaptamanaleMixedCharts = ReadCsvAsync<Chart6>(tableData).Result;

                    foreach (var chart in VanzariSaptamanaleMixedCharts)
                    {
                        var vanzariSaptamanale = dbContext.VanzariSaptamanale.FirstOrDefault(x => x.ID == chart.ID);
                        if (vanzariSaptamanale != null)
                        {
                            vanzariSaptamanale.Zi = chart.Zi;
                            vanzariSaptamanale.Vanzari = chart.Vanzari;
                            vanzariSaptamanale.ProduseVandute = chart.ProduseVandute;
                            vanzariSaptamanale.ProfitPeZi = chart.ProfitPeZi;
                        }
                        else
                        {
                            dbContext.VanzariSaptamanale.Add(new VanzariSaptamanale
                            {

                                Zi = chart.Zi,
                                Vanzari = chart.Vanzari,
                                ProduseVandute = chart.ProduseVandute,
                                ProfitPeZi = chart.ProfitPeZi
                            });
                        }
                    }

                    //VanzariSaptamanale


                    dbContext.SaveChanges();
                    break;




                case "Mixed charts - Chart 7 - Numar de produse vandute si cumparate din Bulgaria si Romania":
                    var Grafic2MixedCharts = ReadCsvAsync<Chart7>(tableData).Result;

                    foreach (var chart in Grafic2MixedCharts)
                    {
                        var grafic2 = dbContext.Grafic2.FirstOrDefault(x => x.Id == chart.ID);
                        if (grafic2 != null)
                        {
                            grafic2.ProduseVanduteInRomania = chart.ProduseVanduteInRomania;
                            grafic2.ProduseVanduteInBulgaria = chart.ProduseVanduteInBulgaria;
                            grafic2.ProduseCumparateDinRomania = chart.ProduseCumparateDinRomania;
                            grafic2.ProduseCumparateDinBulgaria = chart.ProduseCumparateDinBulgaria;
                        }
                        else
                        {
                            dbContext.Grafic2.Add(new Grafic2
                            {
                                
                                ProduseVanduteInRomania = chart.ProduseVanduteInRomania,
                                ProduseVanduteInBulgaria = chart.ProduseVanduteInBulgaria,
                                ProduseCumparateDinRomania = chart.ProduseCumparateDinRomania,
                                ProduseCumparateDinBulgaria = chart.ProduseCumparateDinBulgaria
                            });
                        }
                    }

                    //Grafic2
                       
                    dbContext.SaveChanges();
                    break;



                case "Mixed charts - Chart 8 - Ore suplimentare si ore lucrate pe saptamana pentru fiecare angajat":
                    var AngajatiiMixedCharts = ReadCsvAsync<Chart8>(tableData).Result;

                    foreach(var chart in AngajatiiMixedCharts)
                    {
                        var angajat = dbContext.Angajati.FirstOrDefault(x => x.ID == chart.ID);
                        if(angajat != null)
                        {
                            angajat.OreLucratePeSaptamana = chart.OreLucratePeSaptamana;
                            angajat.OreSuplimentare = chart.OreSuplimentare;
                        }
                        else
                        {
                            dbContext.Angajati.Add(new Angajati
                            {
                                
                                OreLucratePeSaptamana = chart.OreLucratePeSaptamana,
                                OreSuplimentare = chart.OreSuplimentare
                            });
                        }
                    }

                    dbContext.SaveChanges();
                    break;

                    //Angajati
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
