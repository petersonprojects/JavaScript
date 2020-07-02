// start of jQuery
$(()=>{

    function getinfo()
    {
        for(let i = 1;i < 21; i++)
        {
            $.get(`https://anapioficeandfire.com/api/characters/${i}`)
            .done((character)=>{

                if(character.allegiances.length > 0)
                {
                    $.get(character.allegiances[0])
                    .done((houses)=>{
                        if(character.name.length == 0)
                        {
                            $('ul').append(`<li class="cold col-4 mt-3">${character.aliases}: <button class="btn btn-dark">${houses.name}</li>`);
                        }
                        else{
                            $('ul').append(`<li class="cold col-4 mt-3">${character.name}: <button class="btn btn-dark">${houses.name}</li>`);
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
                        $('ul').append(`<li class="cold col-4 mt-3">${character.aliases}: <button class="btn btn-dark">No Allegiances</li>`);
                    }
                    else{
                        $('ul').append(`<li class="cold col-4 mt-3">${character.name}: <button class="btn btn-dark">No Allegiances</li>`);
                    }
                }
            })
            .fail(()=>{
                alert("Api character loading failed.");
            })
        }

    } // end of getinfo function

    function getHouseInfo(index)
    {
            $.get(`https://anapioficeandfire.com/api/characters/${index}`)
            .done((character)=>{

                if(character.allegiances.length > 0)
                {
                    $.get(character.allegiances[0])
                    .done((houses)=>{
                        $('ul').append(`<li>Region: ${houses.region}</li>`);
                    })
                    .fail(()=>{
                        alert("Api house loading failed.");
                    })
                }

                else
                {
                    alert('Character has no house info.')
                }
            })
            .fail(()=>{
                alert("Api character loading failed.");
            })
    }

    getinfo()

    $('ul').on('click','li',(e)=>{
        var listItem = (e.target.parentNode)
        var index= $('li').index(listItem);
        //now that we have the index of the list item we can search for the house info api when clicked
        getHouseInfo(index);
    })

}); //end of JQuery