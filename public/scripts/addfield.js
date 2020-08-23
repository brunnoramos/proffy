//Procurar o botao
document.querySelector("#add-time")
.addEventListener('click', clonefield)

//Quando clicar no botão

//Executar uma ação
function clonefield() {

    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newFieldContainer.querySelectorAll('input')


    fields.forEach(function(field) {
          
          field.value = ""
    }
 
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
    //Colocar na página

}