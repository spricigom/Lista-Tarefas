function addItens (){
    let adicionar = document.getElementById("descricao"); //puxando o input
    if(adicionar.value.trim() !== ""){
        let selecionar = document.createElement("li"); //criando uma li para eu poder ter os botões de finalizar e de excluir
        selecionar.innerHTML = adicionar.value; //pro selecionados desta regra serem iguais ao que o usuario escreveu
        let btnfinalizar = document.createElement("button");//criei o botao finalizar
        btnfinalizar.innerHTML = "Finalizada" //dando nome
        btnfinalizar.addEventListener("click", function(){
            finaTarefa(selecionar); //adicionando o evento de clicar no botão e puxsndo a função de finalizar
        })
        let btnexcluir = document.createElement("button") //criando o botão para excluit
        btnexcluir.innerHTML = "Excluir"; //nome para o botão
        btnexcluir.addEventListener("click", function(){
            excluiTarefa(selecionar);
        })
        selecionar.appendChild(btnfinalizar); //o que foi adicionado vai ter o botao finalizar
        selecionar.appendChild(btnexcluir); // o que foi adicionado vai ter o botao exluir
        document.getElementById("tarefas").appendChild(selecionar);

        adicionar.value = "";
    }
}
function finaTarefa(tarefas){
    tarefas.removeChild(tarefas.childNodes[1]);//remover o botão de finalizar //chilnode oegou o 1 filho do tarefas no caso finalizar
    document.getElementById("finalizadas").appendChild(tarefas);//finalizar a tarefa pendente e levar para a parte finalizada e ficar o botão so de excluir
}
function excluiTarefa(tarefas){
    tarefas.remove(); //vai remover a tarefa
}
document.getElementById("button").addEventListener("click", addItens); //quando clicar no botão vai adicionar em tarefas pendentes
document.addEventListener("keypress", function(event){
    if (event.keyCode === 13){ //caso a tecla 13 (enter) for precionado vai adiconar nos pendentes
        addItens();
    }
})