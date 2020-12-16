// start of jQuery
$(()=>{

    // recursion method of getting api data
    // let pageNum = 0;

    // function getNames(pageNum)
    // {
    //     $.get('https://www.anapioficeandfire.com/api/characters?page=' +pageNum +'&pageSize=50')
    //     .done((response)=>{

    //         if(response.length > 0)
    //         {
    //             pageNum += 1;
    //             getNames(pageNum);
    //         }
    //         else
    //         {
    //             //dom manipulation
    //         }
    //     })
    // }

    // getNames(pageNum);

    // console.log(`Im done ${pageNum}`);

    let fetchArr = [];
    let url;

    for(let page = 0;page < 44;page++)
    {
        url = fetch("https://www.anapioficeandfire.com/api/characters?page=" +page +"&pageSize=50");
        fetchArr.push(url);
    }

    console.log(fetchArr);

    let promise = Promise.all(fetchArr)

    promise.then(resultsArr => {
        
        return Promise.all(resultsArr.map(char => {
            // have to use a promise all here bc .json() can take time
            return char.json()
        }))
    })
    .then(dataArr=>{

        // dataArr is now an array of 44 Arrays (which contain the 50 (pageSize) character results in each Array)
        let charList = [];

        dataArr.forEach(char => {
            // char is in the form [ {}, {}, {} ]
            // allows us to destructure the arrays and just copy what's inside into massive charList array
            charList = [...charList, ...char];

        })

        console.log(charList);
        // at this point, charList is now an array of objects

        //dom manipulation here
        let $listGroupContainer = $('.list-group')
        let liTags = charList.map(char => {

            // checks to figure out what to dispaly if they dont have a name or allegiance
            if(char.name.length > 0)
            {
                return `<a href="${char.url}" class="list-group-item list-group-item-action">${char.name} -- Allegiances: <b>${char.allegiances.length}</b></a>`
            }
            else if(char.name.length == 0)
            {
                return `<a href="${char.url}" class="list-group-item list-group-item-action"><em>${char.aliases[0]}</em> -- Allegiances: <b>${char.allegiances.length}</b></a>`
            }

        })

        $listGroupContainer.html(liTags.join(''))
    })


    // after the characters are displayed on the screen... listen for a click

    let $div = $('.list-group')

    //click event
    $div.click((e)=>{

        // its a link, but dont navigate, just use the data in the href to make another fetch
        e.preventDefault();

        $.get(e.target.href) // res => res.json() conversion is already taken care of in $.get
        .done(detailedCharObj => { 

            let $modalBody = $('.modal-body');
            let $modalTitle = $('.modal-title');

            $modalBody.html('')

            if(detailedCharObj.name === "")
            {
                $modalTitle.html(detailedCharObj.aliases[0])
            }
            else
            {
                $modalTitle.html(detailedCharObj.name)
            }
            // only make the call if they have allegiances
            if(detailedCharObj.allegiances)
            {
                // use a forEach because allegiances is an array
                detailedCharObj.allegiances.forEach(houseUrl => {
                    $.get(houseUrl)
                    .done((houseObj)=>{
                        console.log(houseObj);
                        // puts the previous html there and adds whatever name comes after
                        $modalBody.html(`
                            ${$modalBody.html()}<br>${houseObj.name}

                        `)
                        
                    })
                })
            }

            $('#exampleModal').modal('show')

        }) 

    })

}); //end of JQuery