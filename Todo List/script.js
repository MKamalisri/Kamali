var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.getElementById("ul");
var item = document.getElementById("li");

function inputLength(){
    return input.ariaValueMax.length;
}
function listLength(){
    return item.length;
}
function creatListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value ="";

    function crossOut(){
        li.classList.toggle("done");
    }
    li.addEventListener("click",crossOut);

    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click",deleteListItem);

    function deleteListItem(){
        li.classList.add("delete");
    }
}

function addListAfterClick(){
    if(inputLength() > 0){
        creatListElement();
    }
}

function addListAfterKeypress(event){
    if(inputLength() > 0 && event.which ===13){
        creatListElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);