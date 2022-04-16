
  let container = document.getElementById("container");
  async function getWeather() {
    try {
      let city = document.getElementById("city").value;
      console.log(city);

      let res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1452e80267c762a5083f19219f25f4f8&units=metric`
      );

      let data = await res.json();
      appendData(data);
      console.log("data:", data);

      let lat = data.coord.lat;
      let lon = data.coord.lon;

      let res7 = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minute,hourly&appid=32ce108115971eaf5b586defc87531c2&units=metric`
      );
      let data7 = await res7.json();
      getWeather7days(data7.daily);
      // appendWeek(week)
      console.log("data7:", data7.daily);


      // let icon = data.weather[0].icon;
      // let res1=await fetch
      // (`http://openweathermap.org/img/wn/${icon}@2x.png`);
      // let data1=await res1.json();

      // console.log(data1);
    } catch (err) {
      console.log("err:", err);
    }
  }

  function appendData(data) {
    container.innerHTML = "";
    let innerDiv = document.createElement("div");
    innerDiv.style.width = "200px";
    innerDiv.style.padding = "0  30px";

    let innerdiv = document.createElement("div");

    innerdiv.style.backgroundColor = "white";

    let img = document.createElement("img");
    img.src =
    "data:image/jpeg;base64,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"
    img.style.height = "100px";
    img.style.width = "120px";
    img.style.marginRight = "30px";


   
    let date = document.createElement("h2");
    date.innerHTML = "3 MAR 2022";

    
    
    let dayy = document.createElement("h2");
    dayy.innerHTML ="09:30 pm";

    let name = document.createElement("h5");
    name.innerHTML = "City Name:-" + data.name;

    let temp = document.createElement("h5");
    temp.innerHTML = "Tempreture:-  " + data.main.temp;

    let mintemp = document.createElement("h5");
    mintemp.innerHTML = "Mintemp-  " + data.main.temp_min;

    let humidity = document.createElement("h5");
    humidity.innerHTML = "Humidity:-  " + data.main.humidity;

    let maxtemp = document.createElement("h5");
    maxtemp.innerHTML = "Maxtemp:-" + "  " + data.main.temp_max;

    let wind = document.createElement("h5");
    wind.innerText = "Wind Speed:- " + data.wind.speed + "km/h";

    let clouds = document.createElement("h5");
    clouds.innerText = "Cloud:- " + data.clouds.all;

    let sunrise = document.createElement("h5");
    sunrise.innerText = "Sunrise:- " + data.sys.sunrise;

    let sunset = document.createElement("h5");
    sunset.innerText = "Sunrise:- " + data.sys.sunset;

    let iframe = document.createElement("iframe");
    iframe.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    iframe.width = "600";
    iframe.height = "500";
    innerdiv.append(img, date, dayy);
    innerDiv.append(
      name,
      temp,
      mintemp,
      maxtemp,
      humidity,
      wind,
      clouds,
      sunrise,
      sunset
    );
    container.append(innerdiv, innerDiv, iframe);
  }

  function getWeather7days(data) {
    let container7 = document.getElementById("weather7");
    container7.innerHTML = null;

    data.map(function (elem, index) {
      if (index == week.length) {
        index = 0;
      }
      let div = document.createElement("div");
      div.style.border = "2px solid white";
      div.style.borderRadius = "10px";

      // let img1=document.createElement("img");
      // img1.src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png";

      let day = document.createElement("h6");
      day.innerText = week[index];
      day.style.marginTop="0px";

      let img1=document.createElement("img")
      img1.src=`http://openweathermap.org/img/wn/${elem.weather[0].icon}@2x.png`;
      img1.style.height="60px";
      img1.style.width="60px";
      // img1.style.paddinhg="0px";

      let main = document.createElement("h6");
      main.innerText = elem.weather[0].main;
      main.style.marginTop="0px";
   

      let desc = document.createElement("h6");
      desc.innerText = elem.weather[0].description;

      let min = document.createElement("h6");
      min.innerText = elem.temp.min;

      let max = document.createElement("h6");
      max.innerText = +elem.temp.max;
     

      div.append(img1,main,day,desc, min, max);
      container7.append(div);
    });
  }

  let week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  

  //
