//Puxando elementos
let descricao = document.getElementById("descricao");
let btnAdicionar = document.querySelector("#adicionar");

//quando clicar no botao vai adicionar
btnAdicionar.addEventListener("click", () => {
    pendentes(descricao);
});

btnAdicionar.addEventListener("keypress", function(e) {
    if (e.keyCode === "Enter"){
        pendentes(descricao);
    }
})
//função para adicionar
function pendentes (tarefasPen){
    var ul = document.getElementById("tarefas");
    var li = document.createElement("li");
    li.innerHTML = (tarefasPen.value);
    ul.appendChild(li);
}

