// start of jQuery
$(()=>{

    let fetchArr = [];
    let url  = '';

    for(let page=0;page<44;page++)
    {
        url = fetch('https://www.anapioficeandfire.com/api/characters?page=' +page +"&pageSize=50");
        fetchArr.push(url);
    }

    console.log(fetchArr);

    let promise = Promise.all(fetchArr)

    promise.then((resultsArr)=>{
        
        return Promise.all(resultsArr.map(char=>{
            return char.json()
        })) 
    })
    .then((dataArr)=>{
        console.log(dataArr);

        let charList = [];

        dataArr.forEach((char)=>{
            charList = [...charList,...char];
        })

        console.log(charList);
        //dom manipulation here
    })

    // let apiCall1 = fetch('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50');
    // let apiCall2 = fetch('https://www.anapioficeandfire.com/api/houses?page=1&pageSize=50');

    // let promise = Promise.all([apiCall1, apiCall2]);

    // promise.then((resultsArray)=>{
    //     let results = [];
    //     results[0] = resultsArray[0].json();
    //     results[1] = resultsArray[1].json();

    //     return Promise.all(results)
    // })
    // .then((dataArr)=>{
    //     console.log(dataArr);

    //     let charArray = [];


    //     dataArr.forEach((char)=>{
    //         charArray = [...charArray,...char];
    //     })

    //     // now it is 1 array of 100 elements
    //     console.log(charArray);

    //     //dom manipulation
    // })

    console.log("outside of promise");

    //function getinfo(data)
    //{

        // let characterArray = [];
        // let flag = false;
        // //let houseURLs = [];

        // for(let i = 0;i<= 50;i++)
        // {
        //     $.get(`https://anapioficeandfire.com/api/characters?page=${i}&pageSize=50`)
        //     .done((charList)=>{
        //         characterArray = [...characterArray,...charList]
        //     })
        //     .done(()=>{

        //         if(characterArray.length >= 2130 && flag == false)
        //         {
        //             flag = true;
        //             console.log(characterArray);
        //             //dom manipulation
        //         }
        //     })
        // }



        // let p1 = new Promise((resolve, reject)=>{
        //     // just testing with the first 25 pages
        //     for(let i = 1;i < 25; i++)
        //     {
        //         $.get(`https://anapioficeandfire.com/api/characters/${i}`)
        //         .done((api_chars)=>{

        //             if(api_chars.name.length > 0)
        //             {
        //                 characterArray.push(api_chars.name)
        //             }
        //             else{
        //                 characterArray.push(api_chars.aliases[0]);
        //             }
        //             if(api_chars.allegiances.length > 0)
        //             {
        //                 houseURLs.push(api_chars.allegiances[0])
        //             }
        //             else{
        //                 houseURLs.push(' No allegiances')
        //             }

        //             console.log(`Char array: ${characterArray}`);
        //             console.log(`House URL array: ${houseURLs}`);

        //             let houseNames = houseURLs.map((houses)=>{

        //                 if(houses != ' No allegiances')
        //                 {
        //                     $.get(houses)
        //                     .done(()=>{
        //                         return houses.name;
        //                     })
        //                 }
        //                 else{
        //                     return ' No allegiances'
        //                 }

        //                 console.log(`houses: ${houses}`);

        //             })
        //             console.log(houseNames);
        //         })
        //         .then(()=>{
        //             resolve("Success creating arrays.");
        //         })
        //     }

        // })
        // .then((characterArray, houseNames)=>{

        //     for(let i = 0;i < 24;i++)
        //     {
        //         $('ul').append(`<li class="cold col-4 mt-3">${characterArray[i]}: <button class="btn btn-dark">${houseNames[i]}</li>`);
        //     }
        // })
    
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
    //} // end of getinfo function

    // function getHouseInfo(char_index)
    // {
    //     $.get(`https://anapioficeandfire.com/api/characters/${char_index+1}`)
    //         .done((character)=>{
    //             $.get(character.allegiances[0])
    //             .done((houses)=>{
    //                 if(character.allegiances.length > 0)
    //                 {
    //                     $('li')[char_index].append(`Region: ${houses.region}`)
    //                 }
    //                 else if(character.allegiances.length == 0)
    //                 {
    //                     $('li')[char_index].append(`No allegiances.`)
    //                 }
    //             })
    //             .fail(()=>{
    //                 alert("Api house loading failed.");
    //             })
    //         })
    //         .fail(()=>{
    //             alert("Api character loading failed.");
    //         })

    // } //end of getHouseInfo

    // getinfo()

    // $('ul').on('click','li',(e)=>{
    //     var listItem = (e.target.parentNode)
    //     var index = $('li').index(listItem);
    //     console.log(index);
    //     getHouseInfo(index);
    // })

}); //end of JQuery