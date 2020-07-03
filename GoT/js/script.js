// start of jQuery
$(()=>{

    function getinfo(data)
    {

        let characterArray = [];
        let houseURLs = [];

        let p1 = new Promise((resolve, reject)=>{
            // just testing with the first 25 pages
            for(let i = 1;i < 25; i++)
            {
                $.get(`https://anapioficeandfire.com/api/characters/${i}`)
                .done((api_chars)=>{

                    if(api_chars.name.length > 0)
                    {
                        characterArray.push(api_chars.name)
                    }
                    else{
                        characterArray.push(api_chars.aliases[0]);
                    }
                    if(api_chars.allegiances.length > 0)
                    {
                        houseURLs.push(api_chars.allegiances[0])
                    }
                    else{
                        houseURLs.push(' No allegiances')
                    }

                    console.log(`Char array: ${characterArray}`);
                    console.log(`House URL array: ${houseURLs}`);

                    let houseNames = houseURLs.map((houses)=>{

                        if(houses != ' No allegiances')
                        {
                            $.get(houses)
                            .done(()=>{
                                return houses.name;
                            })
                        }
                        else{
                            return ' No allegiances'
                        }

                        console.log(`houses: ${houses}`);

                    })
                    console.log(houseNames);
                })
                .then(()=>{
                    resolve("Success creating arrays.");
                })
            }

        })
        .then((characterArray, houseNames)=>{

            for(let i = 0;i < 24;i++)
            {
                $('ul').append(`<li class="cold col-4 mt-3">${characterArray[i]}: <button class="btn btn-dark">${houseNames[i]}</li>`);
            }
        })
    
        // Promise.all([p1, p2])
        // .then((data)=>{
        //     console.log(data);
        // })
        // .then(()=>{
        //     //get the house api
        // })

        // for(let i = 1;i < 50; i++)
        // {
        //     $.get(`https://anapioficeandfire.com/api/characters/${i}`)
        //     .done((character)=>{
        //         $.get(character.allegiances[0])
        //         .done((houses)=>{

        //             if(character.allegiances.length > 0)
        //             {
        //                 if(character.name.length == 0)
        //                 {
        //                     $('ul').append(`<li class="cold col-4 mt-3">${character.aliases}: <button class="btn btn-dark">${houses.name}</li>`);
        //                 }
        //                 else{
        //                     $('ul').append(`<li class="cold col-4 mt-3">${character.name}: <button class="btn btn-dark">${houses.name}</li>`);
        //                 }
        //             }
        //             else if(character.allegiances.length == 0)
        //             {
        //                 if(character.name.length == 0)
        //                 {
        //                     $('ul').append(`<li class="cold col-4 mt-3">${character.aliases}: <button class="btn btn-dark">No Allegiances</li>`);
        //                 }
        //                 else{
        //                     $('ul').append(`<li class="cold col-4 mt-3">${character.name}: <button class="btn btn-dark">No Allegiances</li>`);
        //                 }
        //             }
        //         })
        //         .fail(()=>{
        //             alert("Api house loading failed.");
        //         })
        //     })
        //     .fail(()=>{
        //         alert("Api character loading failed.");
        //     })
        // } //end for loop
    } // end of getinfo function

    function getHouseInfo(char_index)
    {
        $.get(`https://anapioficeandfire.com/api/characters/${char_index+1}`)
            .done((character)=>{
                $.get(character.allegiances[0])
                .done((houses)=>{
                    if(character.allegiances.length > 0)
                    {
                        $('li')[char_index].append(`Region: ${houses.region}`)
                    }
                    else if(character.allegiances.length == 0)
                    {
                        $('li')[char_index].append(`No allegiances.`)
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

    // $('ul').on('click','li',(e)=>{
    //     var listItem = (e.target.parentNode)
    //     var index = $('li').index(listItem);
    //     console.log(index);
    //     getHouseInfo(index);
    // })

}); //end of JQuery