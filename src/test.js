// // const a = function(value){
// //     object1 = {
// //         name : value,
// //         surname : 'mungra'
// //     }
// //     return object1;
// // }
// // const b = new a;
// // console.log(a('kevin'));
// // b.name = 'viraj'
// // console.log(b);

const request = require('request');
const checkingError = () => {
    console.log('Something went wrong');
}
const checkingInput = (message) => {
    console.log(message);
}
const cityData = (data) => {
    console.log(data);
}

var checkError;
var invalidInput;
var completeCityData;
var allData;

function gettingReady (url) {
    request(
        {
            url: url,
            json: true,
        },
        (error, response) => {
            if (error) {
                checkError = 1;
                invalidInput = 0;
                completeCityData = 0;
                return;
            }
            else if (response.body.message) {
                checkError = 0;
                invalidInput = response.body.message;
                completeCityData = 0;
                return;
            }
            else {
                allData = {
                    Title: "This is from weather.js",
                    Country: response.body.sys.country,
                    City: response.body.name,
                    Tempreture: response.body.main.temp,
                    FeelsLike: response.body.main.feels_like,
                    Minimum_tempreture: response.body.main.temp_min,
                    Maximum_tempreture: response.body.main.temp_max,
                    Pressure: response.body.main.pressure
                };
                checkError = 0;
                invalidInput = 0;
                completeCityData = allData;
                // console.log(checkError);
                // console.log(invalidInput);
                // console.log(completeCityData);
                return;
            }
        }
    );
}

const weatherData = async function (cityName) {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6a0e8ed4a717a17cac46c31423541f55&units=metric`;

    if (cityName) {
            await gettingReady(url);
            setTimeout(() => {
                if (checkError) {
                    checkingError();
                    // return 'Something went wrong';
                }
                else if (invalidInput) {
                    checkingInput(invalidInput);
                    // return invalidInput;
                }
                else {
                    cityData(completeCityData);
                    // return completeCityData;
                }
            }, 5000);
            
    }
    else {
        return 'Please enter city name';
    }
}

weatherData('rajkot')
setTimeout(() => {
    console.log(completeCityData);
}, 5000);     

// const data = async function(){
//     let newData = await weatherData('rajkot');
//     console.log(newData);  
// }
// data();



// console.log(allData);
// return allData;
// return {  
//     Country : response.body.sys.country,
//     City   : response.body.name,
//     Tempreture : response.body.main.temp,
//     FeelsLike : response.body.main.feels_like,
//     Minimum_tempreture : response.body.main.temp_min,
//     Maximum_tempreture : response.body.main.temp_max,
//     Pressure : response.body.main.pressure
//  };
// console.log("Country name --> " + response.body.sys.country);
// console.log("City name --> " + response.body.name);
// console.log("Tempreture --> " + response.body.main.temp);
// console.log("Tempreture feels like --> " + response.body.main.feels_like);
// console.log("Minimum tempreture --> " + response.body.main.temp_min);
// console.log("Maximum tempreture --> " + response.body.main.temp_max);
// console.log("Pressure --> " + response.body.main.pressure);
// console.log(response.body.weather[0].id);
// console.log(response.body.weather[0].main);
// console.log(response.body.weather[0].description);
// console.log(response.body.weather[0].icon);

















const request = require('request');

// Functions for send response.
const checkingError = () => {
    console.log('Something went wrong');
}

const checkingInput = (message) => {
    console.log(message);
}

const cityData = (data) => {
    // console.log(data);
    return
}

// Variable declaration
var checkError;
var invalidInput;
var completeCityData;
var allData;


// Request function
const gettingReady = function (url) {
    request(
        {
            url: url,
            json: true,
        },
        (error, response) => {
            if (error) {
                checkError = 1;
                invalidInput = 0;
                completeCityData = 0;
                return;
            }
            else if (response.body.message) {
                checkError = 0;
                invalidInput = response.body.message;
                completeCityData = 0;
                return;
            }
            else {
                allData = {
                    Title: "This is from weather.js",
                    Country: response.body.sys.country,
                    City: response.body.name,
                    Tempreture: response.body.main.temp,
                    FeelsLike: response.body.main.feels_like,
                    Minimum_tempreture: response.body.main.temp_min,
                    Maximum_tempreture: response.body.main.temp_max,
                    Pressure: response.body.main.pressure
                };
                checkError = 0;
                invalidInput = 0;
                // completeCityData = allData;
                // console.log(checkError);
                // console.log(invalidInput);
                // console.log(completeCityData);
                return;
            }
        }
    );
    return allData;
}

// Weatherdata function
const weatherData = async function (cityName) {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6a0e8ed4a717a17cac46c31423541f55&units=metric`;

    if (cityName) {
            const dta = await gettingReady(url);
            return new Promise((resolve,reject) => {
                resolve(() => {
                    return dta;
                })
                reject(console.log('hehehe'));
            })
            // return allData;
            // setTimeout(() => {
            //     if (checkError) {
            //         checkingError();
            //         // return 'Something went wrong';
            //     }
            //     else if (invalidInput) {
            //         checkingInput(invalidInput);
            //         // return invalidInput;
            //     }
            //     else {
            //         cityData(allData);
            //         // return completeCityData;
            //     }
            //     return allData;
            // }, 5000);            
    }
    else {
        return 'Please enter city name';
    }
}

const newData = 
weatherData('rajkot')
// const calData = gettingReady();
console.log(newData)
// console.log(calData)
module.exports = weatherData