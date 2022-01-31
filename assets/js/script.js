// write a fetch request for weather api
fetch('https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}')

    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);
    });