import { names } from "./data.js";

window.onload = () => {

    console.log("prueba");
    let firstNames = names.firstNames;
    let lastNames = names.lastNames;
    const container = document.getElementById("container");
    const inputBtn = document.getElementById("button");
    console.log(container);
    console.log(inputBtn);


    let indexFN = 0;
    let indexLN = 0;

    inputBtn.addEventListener("click", () => {
        indexFN = Math.floor(Math.random() * firstNames.length);
        indexLN = Math.floor(Math.random() * lastNames.length);

        const h3 = document.createElement("h3");
        h3.textContent = `${firstNames[indexFN]} ${lastNames[indexLN]}`;

        const existingH3 = container.querySelector("h3");
        
        if (existingH3) {
            container.removeChild(existingH3);
        }

        container.appendChild(h3);
    });


}