export const menu = () => {

    const título = "O nosso Menu";
    const nomeRefeição = "Refeição";
    const texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
    const preço = 123;

    const divConteúdo = document.querySelector("#conteudo");
    const menuDiv = document.createElement("div");
    const títuloElemento = document.createElement("h1");
    const nomeRefeiçãoElemento = document.createElement("h3");
    const textoElemento = document.createElement("p");
    const preçoElemento = document.createElement("p");

    divConteúdo.appendChild(menuDiv);
    menuDiv.appendChild(títuloElemento);
    menuDiv.appendChild(nomeRefeiçãoElemento);
    menuDiv.appendChild(textoElemento);
    menuDiv.appendChild(preçoElemento);
    menuDiv.setAttribute("id", "menu");
    títuloElemento.setAttribute("id", "títuloMenu");
    nomeRefeiçãoElemento.setAttribute("id", "nomeRefeição");
    textoElemento.setAttribute("id", "texto");
    preçoElemento.setAttribute("id", "preço");
    títuloElemento.textContent = título;
    nomeRefeiçãoElemento.textContent = nomeRefeição;
    textoElemento.textContent = texto;
    preçoElemento.textContent = preço;

};
