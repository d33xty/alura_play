import { concectaApi } from "./conectaAPi.js";
import criaCard from "./mostrarVideos.js";

const lista = document.querySelector("[data-lista]");
const botaoPesquisar = document.querySelector("[data-botaoPesquisar]");
console.log(botaoPesquisar);

async function buscaVideo() {
    const campoPesquisa = document.querySelector("[data-pesquisa]");
    const listaFiltrada = await concectaApi.pesquisaVideo(campoPesquisa.value);

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    listaFiltrada.forEach(video => lista.appendChild(criaCard(video)));
    if (listaFiltrada.length == 0) {
        lista.innerHTML = '<h2 class = "mensagem__titulo">não encontrado nenhum video</h2>'
    } 
}

botaoPesquisar.addEventListener("click", () => buscaVideo());
