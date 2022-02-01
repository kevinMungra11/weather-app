const request = require('request');
var allData;
const getDetails = function(url) {

    request({
        url : url,
        json: true
    },
    (error,response) => {
        if (error) {
            allData = "Something Went Wrong"
        }
        else if (response.body.message) {
            allData = {
                message : response.body.message
            }
        }
        else {
            allData = {
                // Title: "This is from weather.js",
                Country: response.body.sys.country,
                City: response.body.name,
                Tempreture: response.body.main.temp,
                FeelsLike: response.body.main.feels_like,
                Minimum_tempreture: response.body.main.temp_min,
                Maximum_tempreture: response.body.main.temp_max,
                Pressure: response.body.main.pressure
            };
        }
})

    // const newData = {
    //     name : "Kevin",
    //     surname : "Mungra"
    // };

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(allData);
        }, 1650);
    })
}

const weatherData = async function (cityName){
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6a0e8ed4a717a17cac46c31423541f55&units=metric`;

    const details = await getDetails(url);

    // const allData = {
    //     name : deatils.name,
    //     surname : deatils.surname,
    //     cityName : cityName,
    // }

    // console.log("This is from allData object");
    // console.log(details);

    return new Promise((resolve,reject) => {
        resolve(details);
    });
}


module.exports = weatherData;
