
const descricao = document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        let add = document.querySelector("#adicionar");
        add.click();
        function pendentes () {
            var ul = document.getElementById("tarefas");
            var li = document.createElement("li");
            li.appendChild(document.createTextNode("Four"));
            li.setAttribute("id", "element4"); // added line
            ul.appendChild(li);
          }
          pendentes(descricao)
    }
})