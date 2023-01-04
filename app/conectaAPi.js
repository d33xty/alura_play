async function listaVideos(){
    const listaVideo = await fetch('http://localhost:3000/videos')
    const listaVideoConvertida = await listaVideo.json();
    return listaVideoConvertida;
}

async function montaVideo(titulo,descricao,url,imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem,
        })
    } )
    if (!conexao.ok) {
        throw new Error("não foi possivel enviar o video");
    }
   
}

async function pesquisaVideo(video){
    const conexao = await fetch(`http://localhost:3000/videos?q=${video}`);
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const concectaApi = {listaVideos,montaVideo,pesquisaVideo};