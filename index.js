var colors = ["red", "deeppink", "crimson", "grey", "aqua"];


//for changing the color.
document.getElementById("colorChanger").addEventListener("click", changeColor);

function changeColor() {
    var randomNumber = Math.floor(Math.random() * 5);
    document.querySelector("body").style.backgroundColor = colors[randomNumber];
    document.querySelector("#colorChanger").style.backgroundColor = colors[randomNumber];
    //for the color name
    document.querySelector("span.colorId").innerText = colors[randomNumber];
    console.log(randomNumber);
}

