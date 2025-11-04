export const local = () => {

    const título = "Onde estamos";
    const morada = "Morada é o local onde está localizado";
    const comoChegar = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";


    const divConteúdo = document.querySelector("#conteudo");
    const localDiv = document.createElement("div");
    const títuloElemento = document.createElement("h1");
    const moradaElemento = document.createElement("p");
    const comoChegarElemento = document.createElement("p");


    divConteúdo.appendChild(localDiv);
    localDiv.appendChild(títuloElemento);
    localDiv.appendChild(moradaElemento);
    localDiv.appendChild(comoChegarElemento);

    localDiv.setAttribute("id", "local");
    títuloElemento.setAttribute("id", "títuloLocal");
    moradaElemento.setAttribute("id", "morada");
    comoChegarElemento.setAttribute("id", "comoChegar");
    títuloElemento.textContent = título;
    moradaElemento.textContent = morada;
    comoChegarElemento.textContent = comoChegar;

};