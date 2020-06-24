function createHeader()
{
    var body = document.getElementsByTagName('body');

    var div = document.createElement('div');
    div.setAttribute('class', 'row');
    body[0].appendChild(div);

    var div = document.getElementsByClassName('row');
    var col = document.createElement('div');
    col.setAttribute('class', 'col-12');
    div[0].appendChild(col);

    var col = document.getElementsByClassName('col-12');
    var ul = document.createElement('ul');
    ul.setAttribute('class', 'header');
    col[0].appendChild(ul);

    var li1 = document.createElement('li');
    li1.setAttribute('id','hoc');
    li1.textContent = "HighOnCoding";
    ul.appendChild(li1);
    var li2 = document.createElement('li');
    li2.setAttribute('id','home');
    li2.textContent  = "Home";
    ul.appendChild(li2);
    var li3 = document.createElement('li');
    li3.setAttribute('id','cat');
    li3.textContent  = "Categories";
    ul.appendChild(li3);
}

function createSubHeader()
{
    var body = document.getElementsByTagName('body');
    var div = document.createElement('div');
    div.setAttribute('class', 'row mt-5');
    body[0].appendChild(div);

    var div = document.getElementsByClassName('row mt-5');
    var col = document.createElement('div');
    col.setAttribute('class', 'offset-1 col-10 offset-1');
    div[0].appendChild(col);

    var col = document.getElementsByClassName('offset-1 col-10 offset-1');
    var ul = document.createElement('ul');
    ul.setAttribute('class', 'subHeader');
    col[0].appendChild(ul);

    var li1 = document.createElement('li');
    li1.setAttribute('id','title');
    li1.textContent = "Curse of the Current Reviews";
    ul.appendChild(li1);
    var li2 = document.createElement('li');
    li2.setAttribute('id','content');
    li2.textContent  = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, suscipit excepturi provident maxime ad nulla consequuntur porro dolorem id illum qui dolorum temporibus rem? Odit, vero? Quasi officiis doloremque a!";
    ul.appendChild(li2);
}

function createThird()
{
    var body = document.getElementsByTagName('body');
    var div = document.createElement('div');
    div.setAttribute('class', 'row mt-5');
    body[0].appendChild(div);

    var div = document.getElementsByClassName('row mt-5');
    var col = document.createElement('div');
    col.setAttribute('class', 'offset-1 col-10 offset-1');
    div[0].appendChild(col);

    var col = document.getElementsByClassName('offset-1 col-10 offset-1');
}

createHeader();
createSubHeader();
createThird();
