// Bronnen: Vragen + uitleg: chatgpt
const pokemonCards = document.querySelectorAll(".pokemon-card");

pokemonCards.forEach(card => {
    card.addEventListener("dragstart", (event) => {
        console.log(card.dataset.name);

        //browser bewaart naam van pokemon
        event.dataTransfer.setData("text", card.dataset.name);

        event.dataTransfer.setData("source", "pokedex");
    });
});

const team = document.querySelector("#team");

team.addEventListener("dragover", (event)=>{
    event.preventDefault();
});

//pokemon neerzetten
team.addEventListener("drop", (event)=>{
    event.preventDefault();

    if(team.children.length >= 6){
        alert("Je team is vol!");
        return;
    }

    const pokemonName = event.dataTransfer.getData("text");

    const source = event.dataTransfer.getData("source");

    const originalCard = document.querySelector(`[data-name="${pokemonName}"]`);

    const clone = originalCard.cloneNode(true);

    clone.setAttribute("draggable", true);
    team.appendChild(clone);
    addDragEvent(clone);
});

//Terug slepen
function addDragEvent(card) {
    card.addEventListener("dragstart", (event)=>{
        event.dataTransfer.setData("text", card.dataset.name);

        event.dataTransfer.setData("source", "team");

        card.classList.add("dragging");
    });

    card.addEventListener("dragend", ()=>{
        card.classList.remove("dragging");
    });
}

//Verwijder de pokemon uit het veld
team.addEventListener("dragend", (event)=>{
    const card = event.target.closest(".pokemon-card");

    if(card){
        card.remove();
    }
});