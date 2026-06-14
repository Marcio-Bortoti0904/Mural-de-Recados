let Autor = document.getElementById("Nome_do_autor");
let Recado = document.getElementById("o_recado");
let Elemento = document.getElementById("Elemento");

function adicionarRecado() {    
    if (Autor.value == "" || Recado.value == "") {
        alert("Preencha todos os campos.");
    } else {
        Elemento.innerHTML += "<li><strong>" + Autor.value + " diz:</strong> " + Recado.value + "</li>";
        Autor.value = "";
        Recado.value = ""; 
    }
}
