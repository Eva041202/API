console.log("search geladen");
//Alle pagina's
const pages = [
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
        url: "/games/gameboy/red"
    },
    {
        name: "pokemon green",
        url: "/games/gameboy/green"
    },
    {
        name: "pokemon blue",
        url: "/games/gameboy/blue"
    },
    {
        name: "pokemon yellow",
        url: "/games/gameboy/yellow"
    },
    {
        name: "pokemon tcg",
        url: "/games/gameboy/tcg"
    },
    {
        name: "pokemon pinball",
        url: "/games/gameboy/pinball"
    },
    {
        name: "pokemon gold",
        url: "/games/gameboy/gold"
    },
    {
        name: "pokemon silver",
        url: "/games/gameboy/silver"
    },
    {
        name: "pokemon puzzle challenge",
        url: "/games/gameboy/puzzlechallenge"
    },
    {
        name: "pokemon crystal",
        url: "/games/gameboy/crystal"
    },
    {
        name: "pokemon tcg2",
        url: "/games/gameboy/tcg2"
    },
    {
        name: "pokemon ruby",
        url: "/games/gameboy/ruby"
    },
    {
        name: "pokemon sapphire",
        url: "/games/gameboy/sapphire"
    },
    {
        name: "pokemon fire red",
        url: "/games/gameboy/firered"
    },
    {
        name: "pokemon leaf green",
        url: "/games/gameboy/leafgreen"
    },
    {
        name: "pokemon emerald",
        url: "/games/gameboy/emerald"
    },
    {
        name: "pokemon mystery dungeon red team",
        url: "/games/gameboy/dungeonredteam"
    },
    {
        name: "hey you pikachu",
        url: "/games/nintendo64/heyyoupikachu"
    },
    {
        name: "pokemon stadium",
        url: "/games/nintendo64/stadium"
    },
    {
        name: "pokemon snap",
        url: "/games/nintendo64/snap"
    },
    {
        name: "pokemon stadium 2",
        url: "/games/nintendo64/stadium2"
    },
    {
        name: "pokemon puzzle league",
        url: "/games/nintendo64/puzzleleague"
    },
    {
        name: "pokemon box ruby & sapphire",
        url: "/games/gamecube/rubysapphire"
    },
    {
        name: "pokemon channel",
        url: "/games/gamecube/channel"
    },
    {
        name: "pokemon colosseum",
        url: "/games/gamecube/colosseum"
    },
    {
        name: "pokemon xd gale of darkness",
        url: "/games/gamecube/galeofdarkness"
    },
    {
        name: "pokemon dash",
        url: "/games/ds/dash"
    },
    {
        name: "pokemon trozei",
        url: "/games/ds/trozei"
    },
    {
        name: "pokemon mystery dungeon blue rescue team",
        url: "/games/ds/dungeonblueteam"
    },
    {
        name: "pokemon ranger",
        url: "/games/ds/ranger"
    },
    {
        name: "pokemon diamond",
        url: "/games/ds/diamond"
    },
    {
        name: "pokemon pearl",
        url: "/games/ds/pearl"
    },
    {
        name: "pokemon mystery explorers of darkness",
        url: "/games/ds/explorersdarkness"
    },
    {
        name: "pokemon mystery explorers of time",
        url: "/games/ds/explorerstime"
    },
    {
        name: "pokemon platinum",
        url: "/games/ds/platinum"
    },
    {
        name: "pokemon mystery explorers of sky",
        url: "/games/ds/explorerssky"
    },
    {
        name: "pokemon heartgold",
        url: "/games/ds/heartgold"
    },
    {
        name: "pokemon soulsilver",
        url: "/games/ds/soulsilver"
    },
    {
        name: "pokemon ranger guardian signs",
        url: "/games/ds/guardiansigns"
    },
    {
        name: "pokemon black",
        url: "/games/ds/black"
    },
    {
        name: "pokemon white",
        url: "/games/ds/white"
    },
    {
        name: "pokemon typing adventure",
        url: "/games/ds/typingadventure"
    },
    {
        name: "pokemon conquest",
        url: "/games/ds/conquest"
    },
    {
        name: "pokemon black 2",
        url: "/games/ds/black2"
    },
    {
        name: "pokemon white 2",
        url: "/games/ds/white"
    },
    {
        name: "pokedex 3d",
        url: "/games/ds3/pokedex3d"
    },
    {
        name: "super pokemon rumble",
        url: "/games/ds3/superrumble"
    },
    {
        name: "pokemon dream radar",
        url: "/games/ds3/dreamradar"
    },
    {
        name: "mystery dungeon gates to infinity",
        url: "/games/ds3/gatestoinfinity"
    },
    {
        name: "pokedex x",
        url: "/games/ds3/x"
    },
    {
        name: "pokedex y",
        url: "/games/ds3/y"
    },
    {
        name: "battle trozei",
        url: "/games/ds3/battletrozei"
    },
    {
        name: "art academy",
        url: "/games/ds3/artacademy"
    },
    {
        name: "alpha sapphire",
        url: "/games/ds3/alphasapphire"
    },
    {
        name: "omega ruby",
        url: "/games/ds3/omegaruby"
    },
    {
        name: "pokemon shuffle",
        url: "/games/ds3/shuffle"
    },
    {
        name: "rumble world",
        url: "/games/ds3/rumble world"
    },
    {
        name: "super mystery dungeon",
        url: "/games/ds3/supermysterydungeon"
    },
    {
        name: "picross",
        url: "/games/ds3/picross"
    },
    {
        name: "detective pikachu",
        url: "/games/ds3/detectivepikachu"
    },
    {
        name: "pokemon moon",
        url: "/games/ds3/moon"
    },
    {
        name: "pokemon sun",
        url: "/games/ds3/sun"
    },
    {
        name: "pokemon ultra moon",
        url: "/games/ds3/ultramoon"
    },
    {
        name: "pokemon ultra sun",
        url: "/games/ds3/ultrasun"
    },
    {
        name: "battle revolution",
        url: "/games/wii/battlerevolution"
    },
    {
        name: "pokemon ranch",
        url: "/games/wii/ranch"
    },
    {
        name: "pokemon rumble",
        url: "/games/wii/rumble"
    },
    {
        name: "pokepark pikachu's adventure",
        url: "/games/wii/pikachusadventure"
    },
    {
        name: "pokepark 2 wonder beyond",
        url: "/games/wii/pokepark2"
    },
    {
        name: "rumble u",
        url: "/games/wiiu/rumbleu"
    },
    {
        name: "pokken tournament",
        url: "/games/wiiu/pokkentournament"
    },
    {
        name: "pokken tournament dx",
        url: "/games/switch/pokkentournamentdx"
    },
    {
        name: "pokemon quest",
        url: "/games/switch/quest"
    },
    {
        name: "let's go, pikachu!",
        url: "/games/switch/letsgopikachu"
    },
    {
        name: "let's go, eevee!",
        url: "/games/switch/letsgoeevee"
    },
    {
        name: "pokemon sword",
        url: "/games/switch/sword"
    },
    {
        name: "pokemon shield",
        url: "/games/switch/shield"
    },
    {
        name: "mystery rescue team dx",
        url: "/games/switch/mysteryrescueteamdx"
    },
    {
        name: "pokemon cafe mix",
        url: "/games/switch/cafemix"
    },
    {
        name: "new pokemon snap",
        url: "/games/switch/newsnap"
    },
    {
        name: "pokemon brilliant diamond",
        url: "/games/switch/brilliantdiamond"
    },
    {
        name: "pokemon shining pearl",
        url: "/games/switch/shiningpearl"
    },
    {
        name: "pokemon legends arceus",
        url: "/games/switch/legendsarceus"
    },
    {
        name: "pokemon scarlet",
        url: "/games/switch/scarlet"
    },
    {
        name: "pokemon violet",
        url: "/games/switch/violet"
    },
    {
        name: "detective pikachu returns",
        url: "/games/switch/detectivepikachureturns"
    },
    {
        name: "pokemon friends",
        url: "/games/switch/friends"
    },
    {
        name: "pokemon legends z-a",
        url: "/games/switch/legendsza"
    },
    {
        name: "pokemon legends z-a",
        url: "/games/switch2/legendsza2"
    },
    {
        name: "pokemon pokopia",
        url: "/games/switch2/pokopia"
    },
    {
        name: "pokemon champions",
        url: "/games/switch2/champions"
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