//find location and set api url
if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      //$("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " +position.coords.longitude );
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      var appId = "989f0290153b10aee3183dd591dc9af8";
var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + appId;

      //sample location url = http://api.openweathermap.org/data/2.5/weather?lat=40.4817&lon=-88.99&appid=989f0290153b10aee3183dd591dc9af8


      //get temp and weather description
      $.getJSON(url, function(weather){
        var fahr = Math.floor((9/5)*(weather.main.temp - 273.15) +32);
        var cel = Math.floor(weather.main.temp - 273);
        document.getElementById("data").innerHTML = weather.name;
        document.getElementById("weather").innerHTML = fahr + " °F";
        document.getElementById("description").innerHTML = weather.weather[0].main;



        //set icon to match weather description
        //this is available if you dig around in the openweathermap.org website
        var id = weather.weather[0].id;
        //document.getElementById("sample").innerHTML = id;
        if(id == 200||id==201||id ==202||id ==210||id==211||id==212||id==221||id==230||id==231||id==232){
          document.getElementById("icon").src = "http://openweathermap.org/img/w/11d.png";
        }
        else if (id == 300||id==301||id==302||id==310||id==311||id==312||id==313||id==314||id==321){
          document.getElementById("icon").src = "http://openweathermap.org/img/w/09d.png";
        }
        else if (id == 500||id ==501||id==502||id==503||id==504||id==520||id==521||id==522||id==531){
          document.getElementById("icon").src = "http://openweathermap.org/img/w/10d.png"
        }
        else if (id == 511||id==600||id==601||id==602||id==611||id==612||id==615||id==616||id==620||id==621||id==622){
          document.getElementById("icon").src = "http://openweathermap.org/img/w/13d.png";
        }
        else if (id == 800){
          document.getElementById("icon").src = "http://openweathermap.org/img/w/01d.png";
        }
        else if (id == 801||id==802||id==803||id==804){
          document.getElementById("icon").src = "http://openweathermap.org/img/w/03d.png"
        }
        else if (id ==701||id==711||id==721||id==731||id==741||id==751||id==761||id==762||id==771||id==772){
          document.getElementById("icon").src = "http://openweathermap.org/img/w/03d.png";
        }
        else {
          document.getElementById("icon").src = "https://cdn3.iconfinder.com/data/iconsets/previews/medium/weather-189.png";
        }

        var tempButton = [fahr +" °F", cel + " °C"];
        $("#cf").on("click", function(){
          $("#weather").html(tempButton[0]);
          tempButton.unshift(tempButton.pop());
        }).click()

      })
    });

 }
