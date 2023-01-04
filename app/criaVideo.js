import { concectaApi } from "./conectaAPi.js";

const form = document.querySelector("[data-form]");
async function criaVideo(evento){
    evento.preventDefault();

    const titulo = document.querySelector("[data-titulo]");
    const descricao = Math.floor(Math.random() * 10).toString();
    const url = document.querySelector("[data-url]");
    const imagem = document.querySelector("[data-imagem]");

    try{
        await concectaApi.montaVideo(titulo.value,descricao,url.value,imagem.value);
        window.location.href = "../pages/envio-concluido.html";
    }catch(error){
        alert(error);
    }
}
form.addEventListener("submit", evento => criaVideo(evento));
