

function test(){
  let textarea = document.getElementById("textdelo");
 let delo = textarea.value;
let div = document.createElement("div");
div.innerText = delo;

div.classList.add("rewiew");
let elem = document.getElementById("newRewiew");
elem.append(div);
}
