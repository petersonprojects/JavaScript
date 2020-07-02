// start of jQuery
$(()=>{

    function getinfo()
    {
        for(let i = 1;i < 150; i++)
        {
            $.get(`https://anapioficeandfire.com/api/characters/${i}`)
            .done((character)=>{

                $.get(character.allegiances[0])
                .done((houses)=>{

                    if(character.allegiances.length > 0)
                    {
                        if(character.name.length == 0)
                        {
                            $('ul').append(`<li class="cold col-4 mt-3">${character.aliases}: <button class="btn btn-dark">${houses.name}</li>`);
                        }
                        else{
                            $('ul').append(`<li class="cold col-4 mt-3">${character.name}: <button class="btn btn-dark">${houses.name}</li>`);
                        }
                    }
                    else if(character.allegiances.length == 0)
                    {
                        if(character.name.length == 0)
                        {
                            $('ul').append(`<li class="cold col-4 mt-3">${character.aliases}: <button class="btn btn-dark">No Allegiances</li>`);
                        }
                        else{
                            $('ul').append(`<li class="cold col-4 mt-3">${character.name}: <button class="btn btn-dark">No Allegiances</li>`);
                        }
                    }
                })
                .fail(()=>{
                    alert("Api house loading failed.");
                })
            })
            .fail(()=>{
                alert("Api character loading failed.");
            })
        }

    } // end of getinfo function

    function getHouseInfo(index)
    {
        $.get(`https://anapioficeandfire.com/api/characters/${index+1}`)
        .done((character)=>{

                $.get(character.allegiances[0])
                .done((houses)=>{

                    if(character.allegiances.length > 0)
                    {
                        $('li')[index].append(`Region: ${houses.region}`)
                    }

                    else if(character.allegiances.length == 0)
                    {   
                        $('li')[index].append(`No Allegiances`)
                    }

                })
                .fail(()=>{
                    alert("Api house loading failed.");
                })
        })
        .fail(()=>{
            alert("Api character loading failed.");
        })

    } //end of getHouseInfo

    getinfo()

    $('ul').on('click','li',(e)=>{
        var listItem = (e.target.parentNode)
        var index = $('li').index(listItem);
        console.log(index);
        getHouseInfo(index);
    })

}); //end of JQuery