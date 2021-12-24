
const onAnalyzeButtonClick = () => {
  // Getting a textarea element with a comment
  const input = document.getElementById('comment').value.trim();
  document.getElementById("h2_change").innerHTML = input;
  document.getElementById("hidd").style.display="inherit";

  var input2 = input.replace(" ", "+");

  url = "http://api.giphy.com/v1/gifs/search?q=" + input2 + "&api_key=AHbuaITp9vRMmmutYffI49EWURZrE5OS&limit=10";

    var xhr = $.get(url);
    xhr.done(function(data) { 
      console.log("success got data", data); 
      var db = data;
      for(let i=1; i<7; i++){
        document.getElementById("img"+i).src = db.data[i].images.fixed_height.url;
      }

    });

};