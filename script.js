function showWeather(){

    let city =
    document.getElementById("city").value;

    let result =
    document.getElementById("result");

    if(city === ""){
        result.innerHTML =
        "Please enter a city name";
    }
    else{
        result.innerHTML =
        "Weather information for " + city;
    }
}