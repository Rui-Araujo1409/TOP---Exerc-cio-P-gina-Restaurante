import teorba from "./teorba.jpg";

const texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const título = "Restaurante El Magnifico!";

const divConteúdo = document.querySelector("#conteudo");
const divTítulo = document.createElement("div");
const títuloElemento = document.createElement("h1");
const divImagem = document.createElement("div");
const divTexto = document.createElement("div");
const textoElemento = document.createElement("p");
const imagem = document.createElement("img");
imagem.src = teorba;

divTítulo.classList.add("titulo");
divConteúdo.appendChild(divTítulo);
divTítulo.appendChild(títuloElemento);
divConteúdo.appendChild(divImagem);
divImagem.appendChild(imagem);
divConteúdo.appendChild(divTexto);
divTexto.appendChild(textoElemento);

títuloElemento.textContent = título;
textoElemento.textContent = texto;

export {títuloElemento, imagem, textoElemento};