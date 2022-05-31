function clickColor() {
  let text = document.getElementById("tagP");
  text.style.color = text.style.color === "red" ? "black" : "red";
}

document.addEventListener("DOMContentLoaded", () => {
  let link = document.querySelector(".link");
  let button = document.querySelector(".button");

  function atribut() {
    const input = prompt("введите ссылку", "https://ru.wikipedia.org/");
    return link.setAttribute("href", input);
  }

  button.addEventListener("click", atribut);
  let table = document.querySelector(".tableBtn");

  let elem = document.querySelector(".elem");

  createTable(elem, 10, 10);

  function createTable(parent, cols, rows) {
    let table = document.createElement("table");
    let Value = 1;
    for (let i = 0; i < rows; i++) {
      let tr = document.createElement("tr");

      for (let j = 0; j < cols; j++) {
        let td = document.createElement("td");
        td.innerHTML = Value++;
        tr.appendChild(td);
      }

      table.appendChild(tr);
    }
    parent.appendChild(table);
  }

  function randomImages(min, max) {
    const input = Math.ceil(Math.random() * (max - min) + min);
    document.querySelector(".images").src = "images/" + input + ".jpg";
    console.log(document.querySelector(".images").width);
    document.querySelector(".images").width = window.innerWidth * 0.8;
    console.log(document.querySelector(".images").width);
  }

  randomImages(9, 1);
});
