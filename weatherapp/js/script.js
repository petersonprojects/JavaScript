
//jQuery
$(()=>{

    $('#enter').click((event)=>{
        let city = $('input').val()

        $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c2632fd651b3b04bf62b614a0189cfd4`)
        .done((data)=>{
            let kelvin = data.main.temp;
            let degC = kelvin - 273.15;
            let degF = Math.floor(degC * 1.8 + 32);
            $('ul').append(`<li>Current temp ${city} (F): ${degF}</li>`);
        })
    })

    $('#clear').click((event)=>{
        $('input').val('')
    })

})