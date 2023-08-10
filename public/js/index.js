window.onload = () => {

    const container = document.getElementById("container");
    const inputBtn = document.getElementById("button");
    console.log(container);
    console.log(inputBtn);

    const firstNames = ["Tornillo", "Benji", "Toshiba", "Lisandro", "Ricardo", "Betty", "Alicio", "Lenny", "Mabel", "Pablo", "El Doctor", "Chicho", "Rudo", "Sir Anthony", "Jenny", "Cannoli", "El Payaso", "Kevin", "Lázaro", "Creek Creek", "Darío", "Pipo", "Colo", "Betty", "Costillita", "Estigma", "Chico", "Juanpi", "Cramalót", "Boris", "René", "Claudia", "Marisa", "Abraham Bolt Bolt", "Mili", "El Gordo", "Jason", "Kiko", "Abel", "La Roca", "Aníbal Gilera", "Carminatti", "Tiki Tiki", "Kiko", "Amílcar", "Silvia", "Claudio", "Gabo","Tico", "Techno", "El Niño", "Gómez", "Renzo", "Coki", "Carlos", "Cristal", "Gustavo", "Culo"]
    const lastNames = ["Goldstein", "Tratativa", "Bronderbol", "Aristimuñón", "Kakalardi", "Laválvula", "Renevoldi", "Culo", "Maluca Gómez", "Asecas", "Vulvini", "Verga", "Roncaglia", "Miller", "La Panza", "Tinkerbell", "Caquita", "Dolver", "Bimolti", "Cañanamo de Leche", "Barros Schebarros", "Túnel", "Vagino", "Dos Dientes", "D'Angelo", "Y Torbellino", "Trueno", "Binomio", "Vivot", "Timber", "Laborda", "Buscapleito", "Bombastic", "Sit and Down", "Trailer", "Prompter", "Dime Que Sí", "Del Bueno", "Van Der", "Meijide", "System", "Tres Cuerpos", "De Frensí", "Bensimon", "Cumshot", "Guglielmiclaudio", "Usandivago", "Astrazeneca", "Fusión 3000", "Croma", "Gómez", "Google", "Soundblaster", "Trompas", "Lancelot", "Colliver", "Gutierrez"]


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