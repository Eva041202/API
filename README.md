Toen de API lessen begonnen heb ik hier 2 weken aan mee kunnen doen en wat kunnen bedenken en maken.
Ik had dit toen der tijd nooit op Github gezet en ben ik alles kwijt.

Met de start van de meesterproef kon ik pas tussendoor werken aan HCD en API.
Romy heeft me geholpen om de Astro op Github te krijgen. Zo raak ik het niet opnieuw kwijt. 

Omdat ik voor ik ziek werd al was begonnen had ik al een idee in gedachten en dit besproken tijdens het evaluatiegesprek waar ik wel bij kon zijn. 
Dat idee heb ik verder uitgewerkt in Figma.

De 3 API's die ik voor dit project gebruik zijn de pokeAPI, drag&drop API en canvas API.
Een API ophalen extern, zoals de pokeAPI, heb ik eerder gedaan met een workshop van Sanne.
Drag&drop en canvas zijn nieuw voor me.

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

## Games
Aparte javascript gemaakt voor het ophalen van de gameconsoles.
Hierin slug gebruikt. Slug is een soort korte naam voor een link.

Daarna in components een gameCard.astro voor de verschillende "kaarten" voor de games.
https://www.pexels.com/ en https://unsplash.com/ en https://pixabay.com/ voor de free photos

In componenten een gameGrid aangemaakt voor de grid van de games.

Een aparte javascript bestand gemaakt voor de verschillende games die bij de gameconsoles horen.

Onder pages een folder gemaakt "games".
Hierin komen de verschillende pagina's voor de games.

Een nieuw component gemaakt voor de games. Deze lijkt op gameCards.astro, maar toch net anders waardoor ik een aparte component heb gemaakt.

Voor iedere gameconsole een aparte .astro gemaakt in pages.

In pokemonGames.js geef ik alle games ook een slug, zodat ik hier later op kan klikken voor pagina's met informatie over de games.

Nadat ik de minimum eisen van de opdracht in de website had ben ik detail pagina's gaan maken voor alle verschillende games.
Daarvoor heb ik deze schets gemaakt in figma:
SCHETS
In componenten heb ik gameInfo.astro gemaakt, zodat ik dat component later bij alle games kan gebruiken.

Ik vond wat ik eerst als structuur had erg omslachtig. Ik heb nu voor de losse game src/pages/(typegame)/(de game zelf) Bijoorbeeld: src/pages/gameboyGames/red.astro

## Teams
Een teams.astro gemaakt.
Hier gebruik ik de drag&drop API. Daar maak ik een apart javascript bestand voor.

De pokemons heb ik eerder opgehaald met de pokeapi, dus die heb ik al.
Ik haal ze nu weer op en maak daar kaartjes van.

Daaronder maak ik met een div een kader waar de teams in gesleept kunnen worden.

In Javascript gezorgd dat 6 pokemons de max is. Met de 7e komt er een melding dat het team vol is.
Bron: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API + https://web.dev/articles/drag-and-drop + uitleg chatgpt

## Pikachu confetti
Voor de pikachu confetti heb ik een apart javascript bestand. (confetti.js)
Bron: https://press.pokemon.com/en/Pokemon-30th-Celebration-Teaser + https://webdesign.tutsplus.com/confetti-animation-canvas-javascript--cms-109130t + uitleg chatgpt

## Dark / light
Voor de dark/light knop heb ik een apart javascript bestand gemaakt.
Deze roep ik op de pagina's op waar ik de functie wil laten werken.
In css benoem ik welke kleuren er in de dark mode moeten zijn.

## Overig
Ik heb voor de terug knop een apart component gemaakt, zodat dit makkelijk overal te zetten is.
Dit had ik waarschijnlijk ook kunnen doen voor de knoppen en zoekbalk, maar wat ik nu heb werkt.

Voor de zoekbalk maak ik een aparte javascript.
Hierin benoem ik alles dat de gebruiker kan zoeken.

Om de pagina's responsive te kunnen maken moet ik een <meta> toevoegen in de head van de paginas.

# Bronnenlijst:
Hericons (2020). Geraadpleegd van <a href="https://heroicons.com/">
Pexels (2014). Geraadpleegd van <a href="https://www.pexels.com/">
Unsplash (2013). Geraadpleegd van <a href="https://unsplash.com/">
Pixabay (2010). Geraadpleegd van <a href="https://pixabay.com/">
Pokemon (2019). Geraadpleegd van <a href="https://press.pokemon.com/en/Pokemon-30th-Celebration-Teaser">
Mdn (2005). Geraadpleegd van <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API">
web.dev(1994). Geraadpleegd van <a href="https://web.dev/articles/drag-and-drop">
tutsplus(2025). Geraadpleegd van <a href="https://webdesign.tutsplus.com/confetti-animation-canvas-javascript--cms-109130t">
Nintendo (1996). Geraadpleegd van <a href="https://www.nintendo.com/en-gb/">
