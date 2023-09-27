var text = document.querySelector("#myText");
var button = document.querySelector("#myButton");
var t = document.querySelector("#t");
button.addEventListener("click", function () {
    t.innerText = text.value;
});
