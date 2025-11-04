export const sobre = () => {

    const título = "Sobre o nosso restaurante"
    const texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    const divConteúdo = document.querySelector("#conteudo");
    const textoDiv = document.createElement("div");
    const títuloElemento = document.createElement("h1");
    const textoSobre = document.createElement("p");

    divConteúdo.appendChild(textoDiv);
    textoDiv.appendChild(títuloElemento);
    textoDiv.appendChild(textoSobre);
    textoDiv.setAttribute("id", "sobre");
    títuloElemento.setAttribute("id", "títuloSobre");
    textoSobre.setAttribute("id", "textoSobre");
    títuloElemento.textContent = título;
    textoSobre.textContent = texto;

};


