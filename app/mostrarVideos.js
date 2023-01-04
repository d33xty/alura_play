import { concectaApi } from "./conectaAPi.js";

const lista = document.querySelector("[data-lista]");

export default function criaCard(video) {
    const cardCriado = document.createElement("li");
    cardCriado.className = "videos__item";
    cardCriado.innerHTML = `<iframe width="100%" height="72%" src="${video.url}" title="${video.titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope picture-in-picture" allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${video.imagem}" alt="logo canal alura">
        <h3>${video.titulo}</h3>
        <p>${video.descricao}</p>
    </div>`

    return cardCriado;
}

async function listaVideos(){
    try{
        const listaApi = await concectaApi.listaVideos();
        listaApi.forEach(video => {lista.appendChild(criaCard(video))});
    }catch{
        lista.innerHTML = '<h2 class = "mensagem__titulo">não foi possivel carregar a lista de videos</h2>';
    }
};

listaVideos()
