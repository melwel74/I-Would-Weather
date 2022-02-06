  
var apiKey = "30865bc8191fe2edd17e05798968b961";
var lat = "";
var lon = "";
var city = "";



var form = document.querySelector(".container form");


$("#select-city").on("click", function (event) {
    event.preventDefault();
    city = $("#city-input").val().trim();
    var textContent = $(this).siblings("input").val();
    var storeArr = [];
    storeArr.push(textContent);
    localStorage.setItem('cityName', JSON.stringify(storeArr))
    console.log(storeArr[0]);

    findCity(city);
});

function findCity(){
    var WUrl = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey;
    
    
    $.ajax({
        url: WUrl,
        method: 'GET'
    }).then(function (data) {
        console.log(data);
        console.log(WUrl);
        $("#current").empty();

        lat = data.coord.lat;
        lon = data.coord.lon;
        findLatLon(lat,lon);
        console.log(lat);
    })

}

function findLatLon(){
    var oneCallUrl = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid="+apiKey;

    $.ajax({
        url:oneCallUrl,
        method:'GET'
    }).then(function(data){
        console.log(data);
    })
}