/*DEO U KOME SE UZIMAJU PODACI IZ BAZE PODATAKA */
async function fetchData(){
  const url = 'https://localhost:7111/api/Magazin/VanzariSaptamanale';
  const response = await fetch(url);
  const datapoints = await response.json();
  console.log("datapoints= ",datapoints);
  return datapoints;
}

fetchData().then(datapoints => {
  const zi = datapoints.map(
    function(index){
      return index.zi;
    })

    const vanzari = datapoints.map(
      function(index){
        return index.vanzari;
      })


    console.log(zi);
    console.log(vanzari);
    myChart.config.data.labels = zi;
    myChart.config.data.datasets[0].data = vanzari;

    myChart.update();
});


/*GRAFF DEO */
const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'Vanzari Saptamnale',
    data: [18, 12, 6, 9, 12, 3, 9],
    backgroundColor: [
      'rgba(255, 26, 104)',
      'rgba(54, 162, 235)',
      'rgba(255, 206, 86)',
      'rgba(75, 192, 192)',
      'rgba(153, 102, 255)',
      'rgba(255, 159, 64)',
      'rgba(0, 0, 0)'
    ],
    borderColor: [
      'rgba(255, 26, 104, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(0, 0, 0, 1)'
    ],
    borderWidth: 1
  }]
};

const config = {
  type: 'bar',
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);



/* Graf2 */
/* uzimanje podataka */



/*graf deo */
$(document).ready(
  function(){
      showGraph();
  }
);
function showGraph()
{
  $.get("https://localhost:7111/api/Magazin/VanzariSaptamanale",function(data){
    var name = ['Vanzari','Profit pe zi'];
    var details = [];
    for (const i in data)
    {
      details.push(data[i].vanzari);
      details.push(data[i].profitPeZi);
    }
    
    var chartdata = 
    {
      labels: name,
      datasets: 
      [
        {
            backgroundColor: ['#EB455F', '#7DB9B6'],
            data: details
        }
      ]
    };

  var options=
  {
    title: 
    {
      display: true,
      text: 'Vanzari Saptamanale'
    },
    elements:
    {
      arc: 
      {
        borderWidth: 1
      }   
    }
  };

  var graphTarget = $("#piChart");
  var graph = new Chart(graphTarget,{
      type: 'pie',
      data: chartdata,
      options:options  
  });

  });  
}

