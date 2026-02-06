function updateTime() {
  //Mumbai//
  let mumbaiElement = document.querySelector("#mumbai"); //1. select the main element
  if (mumbaiElement) {
    let mumbaiDateElement = mumbaiElement.querySelector(".date"); //2. select the date and time//
    let mumbaiTimeElement = mumbaiElement.querySelector(".time");

    let mumbaiTimeZone = moment().tz("Asia/Kolkata"); //define timezone

    mumbaiDateElement.innerHTML = mumbaiTimeZone.format("MMMM Do YYYY"); //3. connect date to the timezone and date format
    mumbaiTimeElement.innerHTML = `${mumbaiTimeZone.format("h:mm:ss [<small>]A[</small>]")}`; //4.connect time to the time zone and format.
  }
  //berlin//
  let berlinElement = document.querySelector("#berlin");
  if (berlinElement) {
    let berlinDateElement = berlinElement.querySelector(".date");
    let berlinTimeElement = berlinElement.querySelector(".time");

    let berlinTimeZone = moment().tz("Europe/Berlin");

    berlinDateElement.innerHTML = berlinTimeZone.format("MMMM Do YYYY");
    berlinTimeElement.innerHTML = `${berlinTimeZone.format("h:mm:ss [<small>]A[</small>]")}`;
  }
  //chicago//
  let chicagoElement = document.querySelector("#chicago");
  if (chicagoElement) {
    let chicagoDateElement = chicagoElement.querySelector(".date");
    let chicagoTimeElement = chicagoElement.querySelector(".time");

    let chicagoTimeZone = moment().tz("America/Chicago");

    chicagoDateElement.innerHTML = chicagoTimeZone.format("MMMM Do YYYY");
    chicagoTimeElement.innerHTML = `${chicagoTimeZone.format("h:mm:ss [<small>]A[</small>]")}`;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
            <div>
              <h2>${cityName}</h2>
              <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
          </div>
          <a href="/" class="back"> << Go Back << </a>
          `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
