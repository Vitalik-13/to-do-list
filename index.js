let input = document.querySelector(".input");
let button = document.querySelector(".button");
let list = document.querySelector(".list");

function addItemToList(value) {
  let block = document.createElement("li");
  block.className = "element-list";
  block.innerHTML = `${value}<img src="image/icons8-галочка-25.png" class="green" alt=""><img src="image/icons8-корзина-30.png" class="hide">`;
  list.appendChild(block);
}

let ArrList = JSON.parse(localStorage.getItem("items")) || [];

if (ArrList.length > 0) {
  ArrList.forEach(function (value) {
    addItemToList(value);
  });
}

button.addEventListener("click", function () {
  let value = input.value;
  if (value !== "") {
    addItemToList(value);
    input.value = "";
    ArrList.push(value);
    localStorage.setItem("items", JSON.stringify(ArrList));
  }
});

list.addEventListener("click", function (event) {
  const clickedElement = event.target;
  const listItem = clickedElement.closest(".element-list");
  if (!listItem) return;

  if (clickedElement.classList.contains("green")) {
    listItem.classList.add("line");
    clickedElement.classList.add("none");
  } else if (clickedElement.classList.contains("hide")) {
    listItem.classList.add("none");
    let index = ArrList.indexOf(listItem.textContent);
    if (index !== -1) {
      ArrList.splice(index, 1);
      localStorage.setItem("items", JSON.stringify(ArrList));
    }
  }
});
// let titel = document.querySelector(".main-title");
// let timeOut = setInterval(() => {
//   if (!titel.classList.contains("border")) {
//     titel.classList.add("border");
//   } else {
//     titel.classList.remove("border");
//   }
// }, 400);

// Зрозумілий приклад з localStorage

// const textArea = document.getElementById("textArea");
// textArea.value = localStorage.getItem("key");
// textArea.addEventListener("input", () => {
//   localStorage.setItem("key", textArea.value);
// });
