//Dit in aparte folder, zodat ik deze code kan ophalen zowel in de pokédex, als de teams.
// Bronnen: Vragen + uitleg: chatgpt
export async function getPokemon() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");

    const data = await response.json();

    const pokemon = await Promise.all(data.results.map(async (poke) => {
        const detailResponse = await fetch(poke.url);
        return detailResponse.json();
        })
    );

    return pokemon;
}