function calculateBasic(){
    let screenInput = document.getElementById("input");
    let yourInput = screenInput.value;
    let result = eval(yourInput);
    screenInput.value = result;
}
// function equalsButton(){
// if (document.getElementById("button15") === "=") {
//     calculateBasic();
// }
// }

// if (document.getElementById("button") {
    
// }
function file(){
function getButtonInput(){
    // document.getElementById("input").value = getElementById()
}
}


function displayButtons(number){

    let screenInput = document.getElementById("input");
    screenInput.value = screenInput.value + number;
    }
window.onload = function() {
document.getElementById("input").addEventListener("keydown", function(event){
if(event.key === "Enter"){
    calculateBasic();
}
});
}

function plusOn(){
    document.getElementById("input").value = document.getElementById("input").value + "+";
}
function minusOn(){
    document.getElementById("input").value = document.getElementById("input").value + "-";
}
function division(){
    document.getElementById("input").value = document.getElementById("input").value + "/";
}
function multiplication(){
    document.getElementById("input").value = document.getElementById("input").value + "*";
}
function fileFunction(){
    let arr = splitFunction();
    console.log(arr);
    let highest = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > highest){
            highest = arr[i];
        }
    }
    document.getElementById("input").value = highest;
}
