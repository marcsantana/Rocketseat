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

    const div_remove_item_message = document.createElement("div")
    div_remove_item_message.classList.add("flex")
    div_remove_item_message.id = "remove-item-message"

    const subdiv = document.createElement("div")
    subdiv.classList.add("flex")

    const img_exclamation = document.createElement("img")
    img_exclamation.src = "assets/icons/exclamacao.svg";

    const label = document.createElement("label")
    label.textContent = "O item foi removido da lista"

    subdiv.appendChild(img_exclamation)
    subdiv.appendChild(label)

    const img_close = document.createElement("img");
    img_close.src = "assets/icons/x.svg";
    
    div_remove_item_message.appendChild(subdiv);
    div_remove_item_message.appendChild(img_close);

    document.body.appendChild(div_remove_item_message);

    img_close.addEventListener("click", function() {
      div_remove_item_message.parentNode.removeChild(div_remove_item_message); 
    });

  });

});



// Chamar a função para adicionar a mensagem com a lógica da margem
addRemoveMessage();