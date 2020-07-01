
            //jQuery
            $(()=>{

                //this is a promise
                $.get(`http://api.openweathermap.org/data/2.5/weather?q=houston&appid=c2632fd651b3b04bf62b614a0189cfd4`)
                //jquery doesnt require json conversion
                //chain as many as you done as u want in order of exec
                .done((data)=>{

                    $('button').click((event)=>{
                        let city = $('input').val()

                        $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c2632fd651b3b04bf62b614a0189cfd4`)
                        .done((data)=>{
                            let kelvin = data.main.temp;
                            let degC = kelvin - 273.15;
                            let degCInt = Math.floor(degC);
                            let degF = degC * 1.8 + 32;
                            let degFInt = Math.floor(degF);
                            $('ul').append(`<li>Current temp ${city} (F): ${degFInt}</li>`);
                        })
                    })

                })
                //catches errors
                .then((error)=>{
                    //console.log(error);
                })

            })