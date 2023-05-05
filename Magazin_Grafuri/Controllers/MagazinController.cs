using Magazin_Grafuri.ConexiuneBazaDeDate;
using Magazin_Grafuri.Tabele;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Magazin_Grafuri.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MagazinController : ControllerBase
    {
        private IConexiuneBD conexiuneBD;
        public MagazinController(IConexiuneBD conexiuneBD)
        {
            this.conexiuneBD = conexiuneBD; 

        }

        [HttpPost]
        [Route("Angajati")]
        public IActionResult AddAngajat([FromBody] ICollection<Angajati> anagajati)
        {
            conexiuneBD.AddAngajat(anagajati);
            return Ok("Adaugat cu Succes!");
        }

        [HttpPost]
        [Route("Dashboard")]
        public IActionResult AddDashboard([FromBody] ICollection<Dashboard> dashboards)
        {
            conexiuneBD.AddDashboard(dashboards);
            return Ok("Adaugat cu Succes!");
        }


        [HttpPost]
        [Route("Produse")]
        public IActionResult AddProduse([FromBody] ICollection<Produse> produse)
        {
            conexiuneBD.AddProduse(produse);
            return Ok("Adaugat cu Succes!");
        }


        [HttpPost]
        [Route("VanzariSaptamanale")]
        public IActionResult AddVanzariSaptamanale([FromBody] ICollection<VanzariSaptamanale> vanzariSaptamanale)
        {
            conexiuneBD.AddVanzariSaptamanale(vanzariSaptamanale);
            return Ok("Adaugat cu Succes!");
        }

        [HttpPost]
        [Route("VanzariTotale")]
        public IActionResult AddVanzariTotale([FromBody] ICollection<VanzariTotale> vanzariTotale)
        {
            conexiuneBD.AddVanzariTotale(vanzariTotale);
            return Ok("Adaugat cu Succes!");
        }

        [HttpPost]
        [Route("Grafic1")]
        public IActionResult AddGrafic1([FromBody] ICollection<Grafic1> Grafic1)
        {
            conexiuneBD.AddGrafic1(Grafic1);
            return Ok("Adaugat cu Succes!");
        }


        [HttpPost]
        [Route("Grafic2")]
        public IActionResult AddGrafic2([FromBody] ICollection<Grafic2> Grafic2)
        {
            conexiuneBD.AddGrafic2(Grafic2);
            return Ok("Adaugat cu Succes!");
        }

        [HttpPost]
        [Route("Grafic3")]
        public IActionResult AddGrafic3([FromBody] ICollection<Grafic3> Grafic3)
        {
            conexiuneBD.AddGrafic3(Grafic3);
            return Ok("Adaugat cu Succes!");
        }

        [HttpPost]
        [Route("Grafic4")]
        public IActionResult AddGrafic4([FromBody] ICollection<Grafic4> Grafic4)
        {
            conexiuneBD.AddGrafic4(Grafic4);
            return Ok("Adaugat cu Succes!");
        }

        [HttpPost]
        [Route("Grafic5")]
        public IActionResult AddGrafic5([FromBody] ICollection<Grafic5> Grafic5)
        {
            conexiuneBD.AddGrafic5(Grafic5);
            return Ok("Adaugat cu Succes!");
        }

        [HttpPost]
        [Route("Grafic6")]
        public IActionResult AddGrafic6([FromBody] ICollection<Grafic6> Grafic6)
        {
            conexiuneBD.AddGrafic6(Grafic6);
            return Ok("Adaugat cu Succes!");
        }

        [HttpPost]
        [Route("Grafic7")]
        public IActionResult AddGrafic7([FromBody] ICollection<Grafic7> Grafic7)
        {
            conexiuneBD.AddGrafic7(Grafic7);
            return Ok("Adaugat cu Succes!");
        }

        [HttpPost]
        [Route("Grafic8")]
        public IActionResult AddGrafic8([FromBody] ICollection<Grafic8> Grafic8)
        {
            conexiuneBD.AddGrafic8(Grafic8);
            return Ok("Adaugat cu Succes!");
        }


        [HttpGet]
        [Route("Angajati")]
        public IActionResult GetAngajati()
        {
            return Ok(conexiuneBD.GetAngajati());  
        }

        [HttpGet]
        [Route("Dashboard")]
        public IActionResult GetDashboard()
        {
            return Ok(conexiuneBD.GetDashboard());
        }


        [HttpGet]
        [Route("Produse")]
        public IActionResult GetProduse([FromQuery] string take, string skip)
        {
            return Ok(conexiuneBD.GetProduse(Convert.ToInt32(take), Convert.ToInt32(skip)));
        }

        [HttpGet]
        [Route("TotalProduse")]
        public IActionResult GetTotalProduse()
        {
            return Ok(conexiuneBD.GetTotalProduse());
        }

        [HttpGet]
        [Route("VanzariSaptamanale")]
        public IActionResult GetVanzariSaptamanale()
        {
            return Ok(conexiuneBD.GetVanzariSaptamanale());
        }

        [HttpGet]
        [Route("VanzariTotale")]
        public IActionResult GetVanzariTotale()
        {
            return Ok(conexiuneBD.GetVanzariTotale());
        }

        [HttpGet]
        [Route("Grafic1")]
        public IActionResult GetGrafic1()
        {
            return Ok(conexiuneBD.GetGrafic1());
        }


        [HttpGet]
        [Route("Grafic2")]
        public IActionResult GetGrafic2()
        {
            return Ok(conexiuneBD.GetGrafic2());
        }

        [HttpGet]
        [Route("Grafic3")]
        public IActionResult GetGrafic3()
        {
            return Ok(conexiuneBD.GetGrafic3());
        }

        [HttpGet]
        [Route("Grafic4")]
        public IActionResult GetGrafic4()
        {
            return Ok(conexiuneBD.GetGrafic4());
        }

        [HttpGet]
        [Route("Grafic5")]
        public IActionResult GetGrafic5()
        {
            return Ok(conexiuneBD.GetGrafic5());
        }

        [HttpGet]
        [Route("Grafic6")]
        public IActionResult GetGrafic6()
        {
            return Ok(conexiuneBD.GetGrafic6());
        }

        [HttpGet]
        [Route("Grafic7")]
        public IActionResult GetGrafic7()
        {
            return Ok(conexiuneBD.GetGrafic7());
        }

        [HttpGet]
        [Route("Grafic8")]
        public IActionResult GetGrafic8()
        {
            return Ok(conexiuneBD.GetGrafic8());
        }

        [HttpPost]
        [Route("ImportTable")]
        public IActionResult ImportTable(IFormFile table, [FromForm] string tableName)
        {
            var response = conexiuneBD.ImportTable(table, tableName);
            if (response)
            {
                return Ok("Tabel importat cu succes!");
            }
            return Ok("Tabel nu este importat !");
        }

    }
}
