// start of jQuery
$(()=>{

    let fetchArr = [];
    let url  = '';

    for(let page=0;page<44;page++)
    {
        url = fetch('https://www.anapioficeandfire.com/api/characters?page=' +page +"&pageSize=50");
        fetchArr.push(url);
    }

    let promise = Promise.all(fetchArr)

    promise.then((resultsArr)=>{
        
        return Promise.all(resultsArr.map(char=>{
            return char.json()
        })) 
    })
    .then((dataArr)=>{

        let charList = [];

        dataArr.forEach((char)=>{
            charList = [...charList,...char];
        })

        //dom manipulation here
        let $listGroupContainer = $('.list-group')
        let liTags = charList.map((char)=>{
            return `<a href="${char.url}" class="list-group-item list-group-item-action">${char.name} <b>${char.allegiances.length}</b></a>`
        })
        $listGroupContainer.html(liTags.join(''))
    })


    //click event
    let $div = $('.list-group')

    $div.click((e)=>{
        e.preventDefault();

        $.get(e.target.href)
        .done((detailedCharObj)=>{

            let $modalBody = $('.modal-body');
            let $modalTitle = $('.modal-title');

            $modalBody.html('')

            $modalTitle.html(detailedCharObj.name)

            if(detailedCharObj.allegiances.length > 0)
            {
                detailedCharObj.allegiances.forEach((houseUrl)=>{
                    $.get(houseUrl)
                    .done((houseObj)=>{
                        //console.log(houseObj.name);
                        $modalBody.html(`<br>${$modalBody.html()}<br>${houseObj.name}`)
                        
                    })
                })
                
            }
            $('#exampleModal').modal('show')

        }) 

    })

}); //end of JQuery