//Button Click
const btn = document.querySelector("#Btn");
btn.addEventListener("click", addItem);
//Keyboard Enter
const input = document.querySelector("#item");
input.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        e.preventDefault;
        addItem();
    }
});

// Created a div after button
const parentElement = document.querySelector(".parent");
const div = document.createElement("div");
btn.parentElement.insertBefore(div,btn.nextElementSibling);

//Create ul with id "list" in div
const list = document.createElement("ul");
list.setAttribute("id", "list");
div.appendChild(list);


//Functions to add item in list

function addItem(){
    let item = getItem();
    placeItem(item);
    // addDeleteBtn();
}

function getItem(){
    const item = document.querySelector("#item").value;
    console.log(item);
    document.getElementById("item").value = null;
    return item;
}

function placeItem(item){
    const listItem = document.createElement("li");
    listItem.textContent = item;

    //add delete button besides item
    const deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click", () => listItem.remove());
    deleteBtn.textContent = "Delete";
    listItem.appendChild(deleteBtn);

    list.appendChild(listItem);
}