let array = [
  "Humidity is the measure of water vapor in the air",
  "Wind: This indicates both the speed and direction of the wind",
  "Atmospheric pressure: The pressure exerted by the weight of the atmosphere",
  `Cloud cover: Describes the amount of the sky that is covered by clouds, with terms like "clear," "partly cloudy," or "overcast".`,
  `Visibility: The distance one can see clearly. It can be affected by fog, rain, or snow. `,
];
let i = 0;

function printTerms() {
  setInterval(() => {
    document.getElementById("Jshelp").value = array[i];
    i = (i + 1) % array.length; // 6%5=1
    console.log("op");
  }, 3000);
}

// it will feel like an infinite loop pan tasa kani nahi honr  it will not block rest of code.
