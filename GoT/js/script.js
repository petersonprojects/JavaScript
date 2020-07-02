$(()=>{

    function getinfo()
    {

            for(let i = 1;i < 10; i++)
            {
                $.get(`https://anapioficeandfire.com/api/characters/${i}`)
                .done((character)=>{

                    if(character.allegiances.length > 0)
                    {
                        $.get(character.allegiances[0])
                        .done((houses)=>{
                            if(character.name.length == 0)
                            {
                                console.log(`${character.aliases} ${houses.name}`);
                            }
                            else{
                                console.log(`${character.name} ${houses.name}`);
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
                            console.log(`${character.aliases} has no allegiances.`);
                        }
                        else{
                            console.log(`${character.name} has no allegiances.`);
                        }
                    }
                })
                .fail(()=>{
                    alert("Api character loading failed.");
                })
            }

    }
    // now target a specific house that was clicked and gets only that data
    // and posts it to the screen

    getinfo()


})