// Bronnen: Vragen + uitleg: chatgpt

console.log("search geladen");
//Alle pagina's
const pages = [
    {
        name: "pokedex",
        url: "/"
    },
    {
        name: "games",
        url: "/games"
    },
    {
        name: "teams",
        url: "/teams"
    },
    {
        name: "gameboy",
        url: "/games/gameboy"
    },
    {
        name: "nintendo 64",
        url: "/games/nintendo64"
    },
    {
        name: "gamecube",
        url: "/games/gamecube"
    },
    {
        name: "ds",
        url: "/games/ds"
    },
    {
        name: "3ds",
        url: "/games/ds3"
    },
    {
        name: "wii",
        url: "/games/wii"
    },
    {
        name: "wii u",
        url: "/games/wiiu"
    },
    {
        name: "switch",
        url: "/games/switch"
    },
    {
        name: "switch 2",
        url: "/games/switch2"
    },
    {
        name: "pokemon red",
        url: "/gameboyGames/red"
    },
    {
        name: "pokemon green",
        url: "/gameboyGames/green"
    },
    {
        name: "pokemon blue",
        url: "/gameboyGames/blue"
    },
    {
        name: "pokemon yellow",
        url: "/gameboyGames/yellow"
    },
    {
        name: "pokemon tcg",
        url: "/gameboyGames/tcg"
    },
    {
        name: "pokemon pinball",
        url: "/gameboyGames/pinball"
    },
    {
        name: "pokemon gold",
        url: "/gameboyGames/gold"
    },
    {
        name: "pokemon silver",
        url: "/gameboyGames/silver"
    },
    {
        name: "pokemon puzzle challenge",
        url: "/gameboyGames/puzzlechallenge"
    },
    {
        name: "pokemon crystal",
        url: "/gameboyGames/crystal"
    },
    {
        name: "pokemon tcg2",
        url: "/gameboyGames/tcg2"
    },
    {
        name: "pokemon ruby",
        url: "/gameboyGames/ruby"
    },
    {
        name: "pokemon sapphire",
        url: "/gameboyGames/sapphire"
    },
    {
        name: "pokemon fire red",
        url: "/gameboyGames/firered"
    },
    {
        name: "pokemon leaf green",
        url: "/gameboyGames/leafgreen"
    },
    {
        name: "pokemon emerald",
        url: "/gameboyGames/emerald"
    },
    {
        name: "pokemon mystery dungeon red rescue team",
        url: "/gameboyGames/dungeonredteam"
    },
    {
        name: "hey you pikachu",
        url: "/nintendo64Games/heyyoupikachu"
    },
    {
        name: "pokemon stadium",
        url: "/nintendo64Games/stadium"
    },
    {
        name: "pokemon snap",
        url: "/nintendo64Games/snap"
    },
    {
        name: "pokemon stadium 2",
        url: "/nintendo64Games/stadium2"
    },
    {
        name: "pokemon puzzle league",
        url: "/nintendo64Games/puzzleleague"
    },
    {
        name: "pokemon box ruby & sapphire",
        url: "/nintendo64Games/rubysapphire"
    },
    {
        name: "pokemon channel",
        url: "/gamecubeGames/channel"
    },
    {
        name: "pokemon colosseum",
        url: "/gamecubeGames/colosseum"
    },
    {
        name: "pokemon xd gale of darkness",
        url: "/gamecubeGames/galeofdarkness"
    },
    {
        name: "pokemon dash",
        url: "/dsGames/dash"
    },
    {
        name: "pokemon trozei",
        url: "/dsGames/trozei"
    },
    {
        name: "pokemon mystery dungeon blue rescue team",
        url: "/dsGames/dungeonblueteam"
    },
    {
        name: "pokemon ranger",
        url: "/dsGames/ranger"
    },
    {
        name: "pokemon diamond",
        url: "/dsGames/diamond"
    },
    {
        name: "pokemon pearl",
        url: "/dsGames/pearl"
    },
    {
        name: "pokemon mystery explorers of darkness",
        url: "/dsGames/explorersdarkness"
    },
    {
        name: "pokemon mystery explorers of time",
        url: "/dsGames/explorerstime"
    },
    {
        name: "pokemon platinum",
        url: "/dsGames/platinum"
    },
    {
        name: "pokemon mystery explorers of sky",
        url: "/dsGames/explorerssky"
    },
    {
        name: "pokemon heartgold",
        url: "/dsGames/heartgold"
    },
    {
        name: "pokemon soulsilver",
        url: "/dsGames/soulsilver"
    },
    {
        name: "pokemon ranger guardian signs",
        url: "/dsGames/guardiansigns"
    },
    {
        name: "pokemon black",
        url: "/dsGames/black"
    },
    {
        name: "pokemon white",
        url: "/dsGames/white"
    },
    {
        name: "pokemon typing adventure",
        url: "/dsGames/typingadventure"
    },
    {
        name: "pokemon conquest",
        url: "/dsGames/conquest"
    },
    {
        name: "pokemon black 2",
        url: "/dsGames/black2"
    },
    {
        name: "pokemon white 2",
        url: "/dsGames/white2"
    },
    {
        name: "pokedex 3d",
        url: "/dsGames/pokedex3d"
    },
    {
        name: "super pokemon rumble",
        url: "/dsGames/superrumble"
    },
    {
        name: "pokemon dream radar",
        url: "/dsGames/dreamradar"
    },
    {
        name: "mystery dungeon gates to infinity",
        url: "/dsGames/gatestoinfinity"
    },
    {
        name: "pokedex x",
        url: "/ds3Games/x"
    },
    {
        name: "pokedex y",
        url: "/ds3Games/y"
    },
    {
        name: "battle trozei",
        url: "/ds3Games/battletrozei"
    },
    {
        name: "art academy",
        url: "/ds3Games/artacademy"
    },
    {
        name: "alpha sapphire",
        url: "/ds3Games/alphasapphire"
    },
    {
        name: "omega ruby",
        url: "/ds3Games/omegaruby"
    },
    {
        name: "pokemon shuffle",
        url: "/ds3Games/shuffle"
    },
    {
        name: "rumble world",
        url: "/ds3Games/rumbleworld"
    },
    {
        name: "super mystery dungeon",
        url: "/ds3Games/supermysterydungeon"
    },
    {
        name: "picross",
        url: "/ds3Games/picross"
    },
    {
        name: "detective pikachu",
        url: "/ds3Games/detectivepikachu"
    },
    {
        name: "pokemon moon",
        url: "/ds3Games/moon"
    },
    {
        name: "pokemon sun",
        url: "/ds3Games/sun"
    },
    {
        name: "pokemon ultra moon",
        url: "/ds3Games/ultramoon"
    },
    {
        name: "pokemon ultra sun",
        url: "/ds3Games/ultrasun"
    },
    {
        name: "battle revolution",
        url: "/wiiGames/battlerevolution"
    },
    {
        name: "pokemon ranch",
        url: "/wiiGames/ranch"
    },
    {
        name: "pokemon rumble",
        url: "/wiiGames/rumble"
    },
    {
        name: "pokepark pikachu's adventure",
        url: "/wiiGames/pikachusadventure"
    },
    {
        name: "pokepark 2 wonder beyond",
        url: "/wiiGames/pokepark2"
    },
    {
        name: "rumble u",
        url: "/wiiGames/rumbleu"
    },
    {
        name: "pokken tournament",
        url: "/wiiGames/pokkentournament"
    },
    {
        name: "pokken tournament dx",
        url: "/switchGames/pokkentournamentdx"
    },
    {
        name: "pokemon quest",
        url: "/switchGames/quest"
    },
    {
        name: "let's go, pikachu!",
        url: "/switchGames/letsgopikachu"
    },
    {
        name: "let's go, eevee!",
        url: "/switchGames/letsgoeevee"
    },
    {
        name: "pokemon sword",
        url: "/switchGames/sword"
    },
    {
        name: "pokemon shield",
        url: "/switchGames/shield"
    },
    {
        name: "mystery rescue team dx",
        url: "/switchGames/mysteryrescueteamdx"
    },
    {
        name: "pokemon cafe mix",
        url: "/switchGames/cafemix"
    },
    {
        name: "new pokemon snap",
        url: "/switchGames/newsnap"
    },
    {
        name: "pokemon brilliant diamond",
        url: "/switchGames/brilliantdiamond"
    },
    {
        name: "pokemon shining pearl",
        url: "/switchGames/shiningpearl"
    },
    {
        name: "pokemon legends arceus",
        url: "/switchGames/legendsarceus"
    },
    {
        name: "pokemon scarlet",
        url: "/switchGames/scarlet"
    },
    {
        name: "pokemon violet",
        url: "/switchGames/violet"
    },
    {
        name: "detective pikachu returns",
        url: "/switchGames/detectivepikachureturns"
    },
    {
        name: "pokemon friends",
        url: "/switchGames/friends"
    },
    {
        name: "pokemon legends z-a",
        url: "/switchGames/legendsza"
    },
    {
        name: "pokemon legends z-a",
        url: "/switch2Games/legendsza2"
    },
    {
        name: "pokemon pokopia",
        url: "/switch2Games/pokopia"
    },
    {
        name: "pokemon champions",
        url: "/switch2Games/champions"
    }
];


//Zoekbalk ophalen
const input = document.querySelector(".search-input");

// Enter indrukken
input?.addEventListener("keydown", (event) => {
    console.log(event.key);

    if (event.key !== "Enter") return;

    const search = input.value.toLowerCase().trim();

    console.log(search);

    const result = pages.find(page => page.name.toLowerCase() === search);

    console.log(result);

    if (result) {
        window.location.href = result.url;
    } else {
        alert("Nothing found");
    }
});