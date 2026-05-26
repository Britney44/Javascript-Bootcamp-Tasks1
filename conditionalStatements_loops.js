let temperature;

if (temperature > 0) {
  console.log("It is freezing!");
}
if (temperature >= 0 && temperature < 15) {
  console.log("It is cold");
}
if (temperature >= 16 && temperature < 25) {
  console.log(" It is Mild");
}
if (temperature > 25) {
  console.log("It is warm");
}
let temperature;

switch (true) {
  case temperature < 0:
    console.log("It is freezing");
    break;

  case temperature > 0 && temperature < 15:
    console.log("it is cold.");
    break;

  case temperature > 16 && temperature < 25:
    console.log("It is mild.");
    break;

  case temperature > 25:
    console.log("It is wwarm.");
}

