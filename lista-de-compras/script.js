const button_add = document.querySelector('#add-item')
const ul = document.querySelector("#items")
const item = document.querySelector('#item-name')

button_add.addEventListener("click", function(event) {

  event.preventDefault()

  const item_text = item.value

  const li = ul.appendChild(document.createElement("li"))
  li.classList.add("flex")

  const div = li.appendChild(document.createElement("div"))
  div.classList.add("flex", "gap-0.75")

  const input = document.createElement("input")
  input.type = "checkbox"

  const paragraph = document.createElement("p")
  paragraph.textContent = item_text

  div.appendChild(input)
  div.appendChild(paragraph)

  const button_li = document.createElement("button")
  li.appendChild(button_li)

  const img = document.createElement("img");
  img.src = "assets/icons/delete.svg";
  img.alt = "Ícone de exclusão"; 
  button_li.appendChild(img);

  item.value = ""

  // Adiciona o event listener ao botão de exclusão APÓS sua criação
  button_li.addEventListener("click", function() {
    const li = this.parentNode;
    ul.removeChild(li);
  });

});