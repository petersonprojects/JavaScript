// start of jQuery





$(()=>{

    //recursion method of getting api data
    let pageNum = 1;

    function getNames(pageNum)
    {
        $.get('https://www.anapioficeandfire.com/api/characters?page=' +pageNum +'&pageSize=50')
        .done((response)=>{

            if(response.length > 0)
            {
                pageNum += 1;
                getNames(pageNum);
            }
            else
            {
                //dom manipulation
            }
        })
    }

    getNames(pageNum);

    console.log(`Im done ${pageNum}`);
// underneath here is the finished copy using promise all
    // let fetchArr = [];
    // let url  = '';

    // for(let page=0;page<44;page++)
    // {
    //     url = fetch('https://www.anapioficeandfire.com/api/characters?page=' +page +"&pageSize=50");
    //     fetchArr.push(url);
    // }

    // let promise = Promise.all(fetchArr)

    // promise.then((resultsArr)=>{
        
    //     return Promise.all(resultsArr.map(char=>{
    //         return char.json()
    //     })) 
    // })
    // .then((dataArr)=>{

    //     let charList = [];

    //     dataArr.forEach((char)=>{
    //         charList = [...charList,...char];
    //     })

    //     //dom manipulation here
    //     let $listGroupContainer = $('.list-group')
    //     let liTags = charList.map((char)=>{

    //         if(char.allegiances.length > 0 && char.name.length > 0)
    //         {
    //             return `<a href="${char.url}" class="list-group-item list-group-item-action">${char.name} -- Allegiances: <b>${char.allegiances.length}</b></a>`
    //         }
    //         else if(char.allegiances.length > 0 && char.name.length == 0)
    //         {
    //             return `<a href="${char.url}" class="list-group-item list-group-item-action">${char.aliases[0]} -- Allegiances: <b>${char.allegiances.length}</b></a>`
    //         }
    //         else if(char.allegiances.length == 0 && char.name.length == 0)
    //         {
    //             return `<a href="${char.url}" class="list-group-item list-group-item-action">${char.aliases[0]} - <b>No Allegiances</b></a>`
    //         }
    //         else if(char.allegiances.length == 0 && char.name.length > 0)
    //         {
    //             return `<a href="${char.url}" class="list-group-item list-group-item-action">${char.name} - <b>No Allegiances</b></a>`
    //         }

    //     })

    //     $listGroupContainer.html(liTags.join(''))
    // })


    // //click event
    // let $div = $('.list-group')

    // $div.click((e)=>{
    //     e.preventDefault();

    //     $.get(e.target.href)
    //     .done((detailedCharObj)=>{

    //         let $modalBody = $('.modal-body');
    //         let $modalTitle = $('.modal-title');

    //         $modalBody.html('')

    //         $modalTitle.html(detailedCharObj.name)

    //         if(detailedCharObj.allegiances.length > 0)
    //         {
    //             detailedCharObj.allegiances.forEach((houseUrl)=>{
    //                 $.get(houseUrl)
    //                 .done((houseObj)=>{
    //                     //console.log(houseObj.name);
    //                     $modalBody.html(`<br>${$modalBody.html()}<br>${houseObj.name}`)
                        
    //                 })
    //             })
                
    //         }

    //         $('#exampleModal').modal('show')

    //     }) 

    // })

}); //end of JQuery