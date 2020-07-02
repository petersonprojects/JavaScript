// start of jQuery
$(()=>{

    function getinfo()
    {

            for(let i = 1;i < 40; i++)
            {
                $.get(`https://anapioficeandfire.com/api/characters/${i}`)
                .done((character)=>{

                    if(character.allegiances.length > 0)
                    {
                        $.get(character.allegiances[0])
                        .done((houses)=>{
                            if(character.name.length == 0)
                            {
                                $('ul').append(`<li class="cold" style="height: 200px;padding-top:75px;">${character.aliases}
                                <button class="btn btn-outline-info">${houses.name}</li>`);
                            }
                            else{
                                $('ul').append(`<li class="cold" style="height: 200px;padding-top:75px;">${character.name}
                                <button class="btn btn-outline-info">${houses.name}</li>`);
                            }

                        })
                        .fail(()=>{
                            alert("Api house loading failed.");
                        })
                    }

                    else
                    {
                        if(character.name.length == 0)
                        {
                            $('ul').append(`<li class="cold" style="height: 200px;padding-top:75px;">${character.aliases}
                                <button class="btn btn-outline-info">No Allegiances</li>`);
                        }
                        else{
                            $('ul').append(`<li class="cold" style="height: 200px;padding-top:75px;">${character.name}
                                <button class="btn btn-outline-info">No Allegiances</li>`);
                        }
                    }
                })
                .fail(()=>{
                    alert("Api character loading failed.");
                })
            }

    } // end of getinfo function

    // now target a specific house that was clicked and gets only that data
    // and posts it to the screen
    $('li').click((e)=>{
        var target = e.target
        console.log(target);
    })

    getinfo()


}); //end of JQuery