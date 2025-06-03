let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = input.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    // Attach delete functionality immediately after creating the button
    delbtn.addEventListener("click", function () {
        item.remove();
    });

    item.appendChild(delbtn);
    ul.appendChild(item);
    input.value = "";
});

ul.addEventListener("click" ,function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});
