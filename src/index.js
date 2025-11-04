import "./styles.css";
import { homepage } from "./homepage.js";
import { sobre } from "./sobre.js";
import { menu } from "./menu.js";
import { local } from "./local.js";

const conteúdo = document.querySelector("#conteudo");

const botãoHomepage = document.querySelector("#home");
const botãoMenu = document.querySelector("#menu");
const botãoLocal = document.querySelector("#local")
const botãoSobre = document.querySelector("#sobre");

homepage();

botãoSobre.addEventListener("click", () => {
    conteúdo.innerHTML = "";
    sobre();
});

botãoHomepage.addEventListener("click", () => {
    conteúdo.innerHTML = "";
    homepage();
});

botãoMenu.addEventListener("click", () => {
    conteúdo.innerHTML = "";
    menu();
});

botãoLocal.addEventListener("click", () => {
    conteúdo.innerHTML = "";
    local();
});