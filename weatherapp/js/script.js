
//jQuery
$(()=>{

    let getinfo = async () =>
    {
        let city = $('input').val()
        $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c2632fd651b3b04bf62b614a0189cfd4`)
        .done((data)=>{

            let kelvin = data.main.temp;
            let degC = kelvin - 273.15;
            let degCInt = Math.floor(kelvin - 273.15);
            let degF = Math.floor(degC * 1.8 + 32);

            //if its hot
            if(degF >= 80)
            {
                $('ul').append(`<li class="hot" style="height: 200px;padding-top:75px;">Temperature in ${city}: (F) ${degF}° (C) ${degCInt}° (K) ${kelvin}</li>`);
            }
            // if its cold
            else if(degF <= 50)
            {
                $('ul').append(`<li class="cold" style="height: 200px;padding-top:75px;">Temperature in ${city}: (F) ${degF}° (C) ${degCInt}° (K) ${kelvin}</li>`);
            }
            // if its fair temperature
            else
            {
                $('ul').append(`<li class="neutral" style="height: 200px;padding-top:75px;">Temperature in ${city}: (F) ${degF}° (C) ${degCInt}° (K) ${kelvin}</li>`);
            }

        })
        .fail(()=>{
            alert("That's not a valid city name");
        })
    }

    $('#enter').click(()=>{
        getinfo()
        $('input').val('')
    })

    // this is for handling enter keydown
    $('input').keydown((sand)=>{
        if(sand.which == 13)
        {
            getinfo()
            $('input').val('')
        }
    })

    $('#clear').click(()=>{
        $('input').val('')
    })


})