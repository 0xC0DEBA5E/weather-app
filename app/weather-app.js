var weatherApp = (function () {
        this.fetchData = function (zipCode) {
            let jsonurl = "http://api.openweathermap.org/data/2.5/forecast?zip=" + zipCode + ",de&APPID=c314e4b540eac4e88cee00e53b7bf99f";
            window.jQuery.get(jsonurl).then(
                (data) => {
                    console.log(data.city.name);
                    if (data.city.name)
                        window.$('#heading').text("Wetter in " + data.city.name);
                    createChart(data);
                },
                (error) => {
                    console.error(error);
                }
            );
        };

        this.createChart = function (weatherData) {
            let tempList = weatherData.list.map((item) => { // Return List with temperatures in Celsius.
                let temp = item.main.temp - 273.15; // Convert Kelvin to Celsius.
                return temp.toFixed(0);
            });

            let timeLabels = weatherData.list.map(
                (item, index) => {
                    let label = '';

                    //if (index % 3 == 0)
                    label = moment.unix(item.dt).calendar();

                    return label;
                }
            );

            let tempCanvas = window.$('#tempCanvas');
            let tempChart = new Chart(tempCanvas, {
                type: 'line',
                data: {
                    labels: timeLabels,
                    datasets: [
                        {
                            label: 'Temperatur',
                            data: tempList,
                            backgroundColor: "rgba(255, 153, 0, 0.6)"
                        }
                    ]
                }
            });
        };
        return this;
    })();