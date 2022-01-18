// write a fetch request for weather api
fetch('https://api.openweathermap.org/data/2.5/onecall?=152c0053bd312e868c9d2a106ccbf7b1s')

    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);
    });