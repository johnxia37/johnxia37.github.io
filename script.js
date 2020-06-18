document.getElementById('color').onclick = changeColor;
var currentColor = "black";

function changeColor() {
    if (currentColor == "red") {
        document.body.style.color = "black";
        document.body.style.background="white";
        document.getElementById("myPic").src = "images/Annotation 2020-01-19 193149.jpg";
        currentColor = "black";
    } else {
        document.body.style.color = "white";
        document.getElementById("myPic").src = "images/main_pic_v2.jpg";
        document.body.style.background="black";
        currentColor = "red";
    }
    return currentColor;
}

alert(5+6);