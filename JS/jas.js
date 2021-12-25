
function onAnalyzeButtonClick() {
  // Getting a textarea element with a comment
  const input = document.getElementById('comment').value.trim();
  document.getElementById("h2_change").innerHTML = input;
  document.getElementById("hidd").style.display="inherit";

  var input2 = input.replace(" ", "+");

  url = "https://api.giphy.com/v1/gifs/search?q=" + input2 + "&api_key=AHbuaITp9vRMmmutYffI49EWURZrE5OS&limit=10/";

    var xhr = $.get(url);
    xhr.done(function(data) { 
      console.log("success got data", data); 
      var db = data;
      for(let i=1; i<7; i++){
        document.getElementById("img"+i).src = db.data[i].images.fixed_height.url;
      }

    });

};


function covidStats(){


  let inputP = document.getElementById('comment2').value.trim();
  let inputD = document.getElementById('comment3').value.trim();

  url = "https://api.opencovid.ca/summary?loc=" + inputP.toUpperCase() + "&date=" + inputD;

    var xhr = $.get(url);
    xhr.done(function(data) { 
      console.log("success got data", data); 
      var db = data.summary[0];
      document.getElementById('covResult').style.display="block";
      document.getElementById('ProvinceDate').innerHTML = "Province = " + inputP.toUpperCase() + ", Date = " + inputD;
      if(!inputD){
        document.getElementById('ProvinceDate').innerHTML = "Province = " + inputP.toUpperCase() + ", Date = Today" ;
      }
      
      if(!inputP){
        document.getElementById('ProvinceDate').innerHTML = "Province = AB" + ", Date = Today" ;
      }
      
      document.getElementById('cases1').innerHTML = "Daily cases = " + db.cases;
      document.getElementById('activeCases1').innerHTML = "Active cases = " + db.active_cases;
      document.getElementById('totalCases1').innerHTML = "Total cases = " + db.cumulative_cases;
      document.getElementById('death1').innerHTML = "Daily Deaths = " + db.deaths;
      document.getElementById('recovered1').innerHTML = "Daily recoveries = " + db.recovered;



     
    
    });
}



