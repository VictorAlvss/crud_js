const addGameButton = document.getElementById("btnAddJogo")


addGameButton.addEventListener("click", () => {
    const cadastraJogo = document.getElementById("cadastraJogo")
    const listaJogos = document.getElementById("listaJogos")
    const jogo = cadastraJogo.value;

if(jogo.trim() !== ""){
   
    const li= document.createElement("li");
    li.textContent = jogo;
    listaJogos.appendChild(li)

    salvaJogos();
    cadastraJogo.value = "";
}

})


function salvaJogos(){
    const listaJogos = document.getElementById("listaJogos")
    let jogos = [];
    console.log(listaJogos)

    for (let i = 0; i < listaJogos.children.length; i++){
        jogos.push(listaJogos.children[i].textContent);
    }

    localStorage.setItem('jogos', JSON.stringify(jogos))
}

function carregarJogos() {
    const jogos = JSON.parse(localStorage.getItem("jogos") || []);
}