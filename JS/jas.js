
let onAnalyzeButtonClick = () => {
  // Getting a textarea element with a comment
  const input = document.getElementById('comment').value.trim();
  document.getElementById("h2_change").innerHTML = input;
  document.getElementById("hidd").style.display = "inherit";
  

  var input2 = input.replace(" ", "+");

  url = `https://api.giphy.com/v1/gifs/search?q=${input2}&api_key=AHbuaITp9vRMmmutYffI49EWURZrE5OS&limit=10/`;

  var xhr = $.get(url);
  xhr.done(function (data) {
    console.log("success got data", data);
    var db = data;
    for (let i = 1; i < 7; i++) {
      document.getElementById("img" + i).src = db.data[i].images.fixed_height.url;
      document.getElementById("img" + i).style.display = "block";
    }

  });

};



async function covidStats () {


  let inputP = document.getElementById('comment2').value.trim();
  let inputD = document.getElementById('comment3').value.trim();

  url = `https://api.opencovid.ca/summary?loc=${inputP.toUpperCase()}&date=${inputD}`;

    const response = await fetch(url)
    const data = await response.json()
    var db = data.data[0];
    document.getElementById('covResult').style.display = "block";
    document.getElementById('ProvinceDate').innerHTML = "Province = " + inputP.toUpperCase() + ", Date = " + inputD;
    if (!inputD) {
      document.getElementById('ProvinceDate').innerHTML = "Province = " + inputP.toUpperCase() + ", Date = Today";
    }

    if (!inputP) {
      document.getElementById('ProvinceDate').innerHTML = "Province = AB" + ", Date = Today";
    }
    //load the data
    document.getElementById('cases1').innerHTML = "Daily cases = " + db.cases_daily;
    document.getElementById('activeCases1').innerHTML = "Total deaths = " + db.deaths;
    document.getElementById('totalCases1').innerHTML = "Total cases = " + db.cases;
    document.getElementById('death1').innerHTML = "Daily Deaths = " + db.deaths_daily;
    document.getElementById('recovered1').innerHTML = "In ICU = " + db.icu;
  




  // var xhr = $.get(url);
  // console.log(xhr)
  // xhr.done(function (data) {
    
  //   var db = data.data[0];
  //   document.getElementById('covResult').style.display = "block";
  //   document.getElementById('ProvinceDate').innerHTML = "Province = " + inputP.toUpperCase() + ", Date = " + inputD;
  //   if (!inputD) {
  //     document.getElementById('ProvinceDate').innerHTML = "Province = " + inputP.toUpperCase() + ", Date = Today";
  //   }

  //   if (!inputP) {
  //     document.getElementById('ProvinceDate').innerHTML = "Province = AB" + ", Date = Today";
  //   }
  //   //load the data
  //   document.getElementById('cases1').innerHTML = "Daily cases = " + db.cases_daily;
  //   document.getElementById('activeCases1').innerHTML = "Total deaths = " + db.deaths;
  //   document.getElementById('totalCases1').innerHTML = "Total cases = " + db.cases;
  //   document.getElementById('death1').innerHTML = "Daily Deaths = " + db.deaths_daily;
  //   document.getElementById('recovered1').innerHTML = "In ICU = " + db.icu;
  //  });




  
}



