let count = 0;
let st = document.getElementById("increase");

function increase(){
    count++;
document.getElementById("zero").textContent = count;

}

function save(){
    console.log(count);
    document.getElementById("string").textContent +=count + " - ";
}

function reset(){
    count = 0;
    document.getElementById("zero").textContent =0;
    document.getElementById("string").textContent = "previous :"
}