var enterButton = document.getElementById('enter')
var input = document.getElementsByClassName('inputBox')[0];
var ul = document.querySelector('ul')
var item = document.getElementsByTagName('li')

function inputLength() {
    return input.value.length;
}
function listLength() {
    return item.length;
}

function createList(){
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    function crossOut(){
        li.classList.toggle('done')
    }

    li.addEventListener('click', crossOut);

    var dBtn = document.createElement('Button')
    dBtn.appendChild(document.createTextNode("X"))
    dBtn.style.color = 'red'
    li.appendChild(dBtn)
    dBtn.addEventListener('click', deleteListItem => {
        li.classList.add("delete")
    })
}

function addListAfterClick() {
    if (inputLength() > 0){
        createList();
    }
    else {
        alert('Pls enter something')
    }
}
function addListAfterKeyPress(event){
    if (inputLength() > 0 && event.which === 13){
        createList();
    }
}

enterButton.addEventListener('click', addListAfterClick);
input.addEventListener('click', addListAfterKeyPress);