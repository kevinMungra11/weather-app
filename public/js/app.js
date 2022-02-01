console.log("Welcome to console.");

const weather = document.querySelector('form');
const search = document.querySelector('input');
const message = document.querySelector('#value-1');
const currentTemperature = document.querySelector('#value-2');
const feelsLike = document.querySelector('#value-3');
const maxTemperature = document.querySelector('#value-4');
const minTemperature = document.querySelector('#value-5');
const pressure = document.querySelector('#value-6');

weather.addEventListener('submit', (e) => {
        e.preventDefault();
        const value = search.value;
        if(value === ""){
            message.textContent = 'Please enter city name';
            currentTemperature.textContent = '';
            feelsLike.textContent = '';
            maxTemperature.textContent = '';
            minTemperature.textContent = '';
            pressure.textContent = ''; 
        }
        else{
        fetch(`weather?name=${value}`)
            .then((response) => {
                response.json()
                    .then((data) => {
                            const newData = JSON.stringify(data);
                            const content = JSON.parse(newData);
                            if(content.message) {
                                message.textContent = `${content.message}`;
                                currentTemperature.textContent = '';
                                feelsLike.textContent = '';
                                maxTemperature.textContent = '';
                                minTemperature.textContent = '';
                                pressure.textContent = '';
                            }
                            else{
                                message.textContent = `${content.City}, ${content.Country}`;
                                currentTemperature.textContent = `Current temperature: ${content.Tempreture}°C`;
                                feelsLike.textContent = `Feels like: ${content.FeelsLike}°C`;
                                maxTemperature.textContent = `Maximum temperature: ${content.Maximum_tempreture}°C`;
                                minTemperature.textContent = `Minimun temperature: ${content.Minimum_tempreture}°C`;
                                pressure.textContent = `Pressure: ${content.Pressure}Pa`; 
                                }
                        }             
    )
    })
}
})