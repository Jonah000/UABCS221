class Item{
    constructor(name, attribute1,attribute2,attribute3,attribute4){
        this.name = name;
        this.attribute1 = attribute1;
        this.attribute2 = attribute2;
        this.attribute3 = attribute3;
        this.attribute4 = attribute4;
    }
}
var item1 = new Item("Dish1","Breakfest","Yes","Low","Many");
const item4 = new Item("Dish2","Breakfest","No","High","Few");
const item7 = new Item("Dish3", "Breakfest","Yes","Low","Many");
const item2 = new Item("Dish4","Lunch","No","High","Few");
const item5 = new Item("Dish5","Lunch","Yes","Low","Many");
const item8 = new Item("Dish6", "Lunch","No","High","Few");
const item3 = new Item("Dish7","Dinner","Yes","Low","Many");
const item6 = new Item("Dish8", "Dinner","No","High","Few");
const item9 = new Item("Dish9", "Dinner","Yes","Low","Many");
const item10 = new Item("Dish10", "Breakfest", "No","High","Few")
var AllItems = [];
AllItems.push(item1,item2,item3,item4,item5,item6,item7,item8,item9,item10);
console.log(AllItems)


const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const checkbox3 = document.getElementById("checkbox3");
const radiobutton1 = document.getElementById("radiobutton1")
const radiobutton2 = document.getElementById("radiobutton2")
const radiobutton3 = document.getElementById("radiobutton3");


const button1 = document.getElementById("Dish1")
const button2 = document.getElementById("Dish2")
const button3 = document.getElementById("Dish3")
const button4 = document.getElementById("Dish4")
const button5 = document.getElementById("Dish5")
const button6 = document.getElementById("Dish6")
const button7 = document.getElementById("Dish7")
const button8 = document.getElementById("Dish8")
const button9 = document.getElementById("Dish9")
const button10 = document.getElementById("Dish10")
var AllDishButtons = []
AllDishButtons.push(button1,button2,button3,button4,button5,button6,button7,button8,button9,button10)



var HashMap1 = new Map()

var UpdatedAllItems = []; 

var imageGrid = document.getElementById("imageGrid");

var expanded = false;
function showCheckboxes(){
    var checkboxes = document.getElementById("checkboxes");
    if(!expanded){
        checkboxes.style.display = "block";
        expanded = true;
    }
    else{
        checkboxes.style.display = "none";
        expanded = false;
    }
}
var pressed = false;
function showRadiobuttons(){
    var radioButtons = document.getElementById("radioButtons");
    if(!pressed){
        radioButtons.style.display = "block";
        pressed = true;
    }
    else{
        radioButtons.style.display = "none";
        pressed = false;
    }
}

function directSearch(text){
    imageGrid.innerHTML = "";
    checkbox1.checked = false;
    checkbox2.checked = false;
    checkbox3.checked = false;
    radiobutton1.checked = false;
    radiobutton2.checked = false;
    radiobutton3.checked = false;
    HashMap1.clear();
    for (var i = 0; i <AllDishButtons.length; i++){
        var ButtonItem = AllDishButtons[i];
        if(text === ButtonItem.value){
            imageGrid.append(ButtonItem);
        }
    }

}
function WhatTypeOfDish(value){
    HashMap1.clear();
    UpdatedAllItems.length = 0
    if(value === "Breakfest"){
        checkbox1.checked = false
        checkbox2.checked = false
        checkbox3.checked = false
        HashMap1.clear();
        for(var i = 0; i <AllItems.length; i++){
            var object = AllItems[i];
            if(radiobutton1.value === object.attribute1){
                UpdatedAllItems.push(AllItems[i])
                console.log(AllItems[i])
            }
        }
    }
    if(value === "Lunch"){
        checkbox1.checked = false
        checkbox2.checked = false
        checkbox3.checked = false
        HashMap1.clear();
        for(var i = 0; i <AllItems.length; i++){
            var object = AllItems[i]
            if(radiobutton2.value === object.attribute1){
                UpdatedAllItems.push(AllItems[i])
                console.log(AllItems[i])
            }
        }
    }
    if(value === "Dinner"){
        checkbox1.checked = false
        checkbox2.checked = false
        checkbox3.checked = false
        HashMap1.clear();
        for(var i = 0; i <AllItems.length; i++){
            var object = AllItems[i]
            if(radiobutton3.value === object.attribute1){
                UpdatedAllItems.push(AllItems[i])
                console.log(AllItems[i])
            }
        }   
    }
    console.log(UpdatedAllItems)
}

function Filter(attribute1, attribute2, attribute3, attribute4, name, HashMap1, UserFilterInputs){
    var score = 0;
    for(var i = 0; i <UserFilterInputs.length; i++){
        if(UserFilterInputs[i]===attribute1){
            score += 1;
        }
        if(UserFilterInputs[i]===attribute2){
            score += 1;
        }
        if(UserFilterInputs[i]===attribute3){
            score += 1;
        }
        if(UserFilterInputs[i]===attribute4){
            score += 1;
        }
    }
    return  HashMap1.set(name,score);
}

function updateSelectedValues() {
    const selectedValues = [];
    if (checkbox1.checked) {
      selectedValues.push("Yes");
    }
    if (checkbox2.checked) {
      selectedValues.push("Low");
    }
    if (checkbox3.checked){
      selectedValues.push("Many")
    }
    console.log(selectedValues);
    for(var i =0; i<UpdatedAllItems.length; i++){
        Filter(UpdatedAllItems[i].attribute1, UpdatedAllItems[i].attribute2, UpdatedAllItems[i].attribute3, UpdatedAllItems[i].attribute4, UpdatedAllItems[i].name, HashMap1, selectedValues)
     }
     var HashMap2 = new Map([...HashMap1.entries()].sort((a, b) => b[1] - a[1]));
     var TopFilteredChoices = [...HashMap2.keys()]
     var DisplayedDishes = []
     for(var i = 0; i<TopFilteredChoices; i++){
        var object = TopFilteredChoices[i];
        if(object === AllItems.name){
            DisplayedDishes.push(AllItems)
        }
     }
     console.log(HashMap2)
     console.log(TopFilteredChoices)
     changeHTML(TopFilteredChoices,AllDishButtons,imageGrid);

  }

  function changeHTML(Array,AllDishButtons,imageGrid){
    var test = document.getElementById("test");
    test.innerHTML = Array.join(", ");
    imageGrid.innerHTML = "";
    for(const item of Array){
        var matchingButton = AllDishButtons.find(AllDishButtons => AllDishButtons.id === item);
        if(matchingButton){
            imageGrid.appendChild(matchingButton)
        }
    }
}

function DishProfilePage(value) {
    var inputInstance;
    for (var i = 0; i < AllItems.length; i++) {
        var instance = AllItems[i];
        if (value === instance.name) {
            inputInstance = instance;
        }
    }
    console.log(value + " "+ JSON.stringify(inputInstance));
    var myObject = inputInstance;
    localStorage.setItem("myObject", JSON.stringify(myObject));
    window.location.href = "DishProfile.html";
}
    if (window.location.href.includes("DishProfile.html")) {
        var storedObject = localStorage.getItem("myObject");
        if (storedObject) {
        var myObject = JSON.parse(storedObject);
        var displayDiv = document.getElementById("name");
        var displayDiv2 = document.getElementById("attribute1");
        displayDiv.innerHTML = `<p>Name: ${myObject.name}</p>`;
        displayDiv2.innerHTML = `<p>attribute1: ${myObject.attribute1}</p>`;
    }
}
