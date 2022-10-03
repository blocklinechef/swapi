const axios = require('axios');

axios.get('https://swapi.dev/api/people/')
    .then(response => {
        response.data.results.forEach(element => {
            console.log(element.name);
        });
    })