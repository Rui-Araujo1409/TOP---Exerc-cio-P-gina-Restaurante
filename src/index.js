import "./styles.css";
import {títuloElemento, imagem, textoElemento} from "./homepage.js";
import {textoDiv} from "./sobre.js";

const conteúdo = document.querySelector("#conteudo");

const botãoHomepage = document.querySelector("#home");
const botãoMenu = document.querySelector("#menu");
const botãoLocal = document.querySelector("#local")
const botãoSobre = document.querySelector("#sobre");

botãoSobre.addEventListener("click", () => {
conteúdo.innerHTML = "";
conteúdo.innerHTML = "Sobre";
});

botãoHomepage.addEventListener("click", () => {
    conteúdo.innerHTML = "";
    conteúdo.textContent = "Home";
});

botãoMenu.addEventListener("click", () =>{
    conteúdo.innerHTML = "";
    conteúdo.textContent = "Menu";
});

botãoLocal.addEventListener("click", () => {
    conteúdo.innerHTML = "";
    conteúdo.textContent = "Local";
});