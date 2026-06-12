Toen de API lessen begonnen heb ik hier 2 weken aan mee kunnen doen en wat kunnen bedenken en maken.
Ik had dit toen der tijd nooit op Github gezet en ben ik alles kwijt.

Met de start van de meesterproef kon ik pas tussendoor werken aan HCD en API.
Romy heeft me geholpen om de Astro op Github te krijgen. Zo raak ik het niet opnieuw kwijt. 

Omdat ik voor ik ziek werd al was begonnen had ik al een idee in gedachten en dit besproken tijdens het evaluatiegesprek waar ik wel bij kon zijn. 
Dat idee heb ik verder uitgewerkt in Figma.

In Astro heb ik een structuur gemaakt.
Onder Components heb ik gemaakt: 
- scroll_images.astro 
    Hierin heb ik de code van een workshop met Cyd toegepast. 
- pokemonCards.astro 
    Dit wordt voor de kaartjes in de pokédex 
- pokemonGrid.astro 
    Hierin het tonen van de kaartjes (in een grid) 

Onder Pages heb ik gemaakt:
- index.astro 
    Dit wordt de eerste  pagina die te zien is. Deze scrollt weg voor de homepage(pokedex) 
- pokedex.astro 
    Dit wordt de eerste pagina met de pokedex 
- games.astro 
    Dit wort de pagina met de pokemon games 
- teams.astro 
    Dit wordt de pagina met de teams die de gebruiker kan maken 

Aparte javascript bestanden:  
- pokemon.js voor de pokéAPI. 
    Dit voor het ophalen van de pokéAPI 
    Dit apart, zodat ik de code kan zowel in de pokédex als teams kan ophalen 
- typeColor.js voor de verschillende kleuren bij de verschillende types 
    Hiermee kan ik de types ophalen en aangeven welke kleur ze moeten worden. 

Ik had eerst problemen met de pokeapi ophalen.
Tenminste in localhost:4321/pokedex kon ik wel de namen van de pokemons zien, maar steeds maar niet in localhost:4321.
Met lang zoeken en chatgpt om hulp vragen bleek dat ik ergens pokemon had geschreven in de code en niet Pokemon. Één hoofdletter.

Nu kan ik verder met de type kleuren apart zetten in het aparte javascript bestand.
Dit wordt dan de achtergrond kleur voor de vakjes waar de pokemons in staan.
Iedere type pokemon krijgt z'n eigen kleur.

Bronnenlijst:
Hericons (2020). Geraadpleegd op 12-06-26 van <a href="https://heroicons.com/">
