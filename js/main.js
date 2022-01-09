import Gamemode from './gamemode.js';
import Role from './role.js';


const r_builds = new Role("Builds", "#e81e4d");
const r_champPool = new Role("Champions", "#1dddf2");
const r_gameplay = new Role("Gameplay", "#1bc266");
const r_pregame = new Role("Pre-game", "#f959ff");
const r_captain = new Role("Captain", "#1b069e");
const r_legendary = new Role("Legendary", "#ffa600");


let gamemodes = [];

gamemodes.push(new Gamemode("Magic is power", "Ability power items only", 10, r_builds, "rabadons.png"));
gamemodes.push(new Gamemode("Magic is overrated", "Ability power items are banned", 10, r_builds, "norabadons.png"));
gamemodes.push(new Gamemode("Physical", "Attack damage items only", 10, r_builds, "bfsword.png"));
gamemodes.push(new Gamemode("Weakness", "Attack damage items are banned", 10, r_builds, "nobfsword.png"));
gamemodes.push(new Gamemode("Rock solid", "Tank / Fighter items only", 10, r_builds, "armor.png"));
gamemodes.push(new Gamemode("Pillow fight", "Support items only", 75, r_builds, "spellthiefs.png"));
gamemodes.push(new Gamemode("What is this healing?", "Grievous wounds items are banned (including ignite)", 10, r_builds, "blood.png"));
gamemodes.push(new Gamemode("No penetration", "Armor / Magic penetration items are banned (including some item passives that have penetration)", 10, r_builds, "nopen.png"));
gamemodes.push(new Gamemode("Classic builds", "Mythic items are banned", 35, r_builds, "nomythic.png"));
gamemodes.push(new Gamemode("Mythic power spike", "Mythic item can only be purchased as a last item", 10, r_builds, "tryforce.png"));

gamemodes.push(new Gamemode("Mages", "Mage champions only", 10, r_champPool, "mage.png"));
gamemodes.push(new Gamemode("Tanks", "Tank champions only", 10, r_champPool, "tank.png"));
gamemodes.push(new Gamemode("Fighters", "Fighter champions only", 10, r_champPool, "fighter.png"));
gamemodes.push(new Gamemode("Assassins", "Assassin champions only", 10, r_champPool, "assassin.png"));
gamemodes.push(new Gamemode("Marksmans", "Marksman champions only", 35, r_champPool, "adc.png"));
gamemodes.push(new Gamemode("Supports", "Support champions only (Mage supports (I.E. Lux, Swain) are not allowed)", 75, r_champPool, "support.png"));

gamemodes.push(new Gamemode("Forgot to buy items", "No items until 5 minutes", 10, r_gameplay, "5min.png"));
gamemodes.push(new Gamemode("Forgot to buy items... again", "No items until 10 minutes", 35, r_gameplay, "10min.png"));
gamemodes.push(new Gamemode("I don't need items", "No items until 15 minutes", 55, r_gameplay, "15min.png"));
gamemodes.push(new Gamemode("Bloody items", "No items until first blood", 10, r_gameplay, "firstblood.png"));
gamemodes.push(new Gamemode("Drake items", "No items until first drake (any team)", 10, r_gameplay, "drakekill.png"));
gamemodes.push(new Gamemode("Stone items (any team)", "No items until first tower (any team)", 10, r_gameplay, "turret1.png"));
gamemodes.push(new Gamemode("Stone items", "No items until your team  gets a first tower", 35, r_gameplay, "turret2.png"));
gamemodes.push(new Gamemode("Bloody items (personal)", "You can only buy items after you get your first kill", 10, r_gameplay, "firstkill.png"));
gamemodes.push(new Gamemode("ARAM items", "No items until your first death", 10, r_gameplay, "aram.png"));
gamemodes.push(new Gamemode("Darkness", "Wards are not allowed. Oracle Lens is allowed", 35, r_gameplay, "noward.png"));
gamemodes.push(new Gamemode("Bro lane", "Don't fight until 5 minutes", 10, r_gameplay, "cull.png"));
gamemodes.push(new Gamemode("Nasus on copium", "Don't fight until 10 minutes", 55, r_gameplay, "nasusq.png"));
gamemodes.push(new Gamemode("*Slaps keyboard*", "Missed cannon forces all summoner spells (until 10 minutes)", 35, r_gameplay, "flash.png"));
gamemodes.push(new Gamemode("AFK", "Missed cannon forces you to recall (until 10 minutes)", 35, r_gameplay, "recall.png"));
gamemodes.push(new Gamemode("Jungle curse", "Don't go back while a jungle buff is active (exepct dragon)", 10, r_gameplay, "baron.png"));
gamemodes.push(new Gamemode("Low elo", "Epic monsters can't be killed", 35, r_gameplay, "nodrake.png"));

gamemodes.push(new Gamemode("Precision rune tree only", "You can only use precision rune tree", 10, r_pregame, "precrune.png"));
gamemodes.push(new Gamemode("Domination rune tree only", "You can only use domination rune tree", 10, r_pregame, "dominationrune.png"));
gamemodes.push(new Gamemode("Sorcery rune tree only", "You can only use sorcery rune tree", 10, r_pregame, "sorceryrune.png"));
gamemodes.push(new Gamemode("Resolve rune tree only", "You can only use resolve rune tree", 10, r_pregame, "resolverune.png"));
gamemodes.push(new Gamemode("Inspiration rune tree only", "You can only use inspiration rune tree", 10, r_pregame, "insprune.png"));
gamemodes.push(new Gamemode("Flashless", "Flash summoner spell is banned", 35, r_pregame, "noflash.png"));
gamemodes.push(new Gamemode("Pro play", "Teleport summoner spell is mandatory", 35, r_pregame, "tp.png"));
gamemodes.push(new Gamemode("Disco nunu", "Ghost and clense summoner spells are mandatory (ghost and smite for junglers)", 55, r_pregame, "nunu.png"));

gamemodes.push(new Gamemode("I'm the captain here", "Team captain ignores all other rules", 55, r_captain, "gpface.png"));
gamemodes.push(new Gamemode("Kill command", "Team captain can ask anyone at any point to die to him (once per game)", 55, r_captain, "killcom.png"));
gamemodes.push(new Gamemode("Instalock", "Team captain has to play Yasuo or Yone (Yasuo and Yone can't be banned)", 55, r_captain, "yasuo.png"));
gamemodes.push(new Gamemode("Prisoner", "Team captain can only buy items after getting his first kill", 55, r_captain, "prisoner.png"));
gamemodes.push(new Gamemode("Shopkeeper", "Team captain chooses what first item everyone has to build (ignores build restrictions)", 55, r_captain, "boris.png"));
gamemodes.push(new Gamemode("Follow the king", "Everyone has to build the same items as the team captain", 55, r_captain, "poroking.png"));

gamemodes.push(new Gamemode("Opposite day", "Win by losing", 100, r_legendary, "opday.png"));
gamemodes.push(new Gamemode("Permadeath", "After dying 3 times - you must stay afk for the rest of the game", 100, r_legendary, "permadeath.png"));
gamemodes.push(new Gamemode("Nemesis Draft", "Every player picks a champion for the opposing team", 100, r_legendary, "taric.png"));


function generateAllRules(gamemodesList, teamName) {

    let HTML = '';

    if (document.querySelector("#teamBalanceBox").checked) {
        HTML += `<p class="team-name">${teamName}</p>`;
    }

    gamemodesList.forEach(gm => {
        HTML += '<div class="col">';
        HTML += `<div class="card card-${gm.getRarity().name}">`;
        HTML += `<span class="card-role" style="border: 2px solid ${gm.role.color}; color: ${gm.role.color};">${gm.role.name}</span>`;
        HTML += '<div class="card-imgbox">';
        HTML += `<img class="card-img-top" src="./img/${gm.img}" alt="${gm.img}" />`;
        HTML += '</div>';
        HTML += '<div class="card-body">';
        HTML += `<h5 class="card-text">${gm.name}</h3>`;
        HTML += `<p class="card-text">${gm.desc}</p>`;
        HTML += `<img class="gem" src="${gm.getRarity().img}">`;
        HTML += '</div></div></div>';

    });

    return HTML;
}

function buildTeam() {

    let rules = {
        build_pool: document.querySelector('#i_build_pool').value,
        build_chance: document.querySelector('#i_build_chance').value,
        champion_pool: document.querySelector('#i_champion_pool').value,
        champion_chance: document.querySelector('#i_champion_chance').value,
        gameplay_pool: document.querySelector('#i_gameplay_pool').value,
        gameplay_chance: document.querySelector('#i_gameplay_chance').value,
        pregame_pool: document.querySelector('#i_pregame_pool').value,
        pregame_chance: document.querySelector('#i_pregame_chance').value,
        captain_pool: document.querySelector('#i_captain_pool').value,
        captain_chance: document.querySelector('#i_captain_chance').value,
        legendary_pool: document.querySelector('#i_legendary_pool').value,
        legendary_chance: document.querySelector('#i_legendary_chance').value,
        has_captain: document.querySelector("#captainBox").checked,
        ignore_rarities: document.querySelector("#rarityBox").checked
    };

    // Chance validation
    if (rules.build_chance > 100 || rules.build_chance < 0) {
        rules.build_chance = 100;
        document.querySelector('#i_build_chance').value = 100;
    }

    if (rules.champion_chance > 100 || rules.champion_chance < 0) {
        rules.champion_chance = 100;
        document.querySelector('#i_champion_chance').value = 100;
    }

    if (rules.gameplay_chance > 100 || rules.gameplay_chance < 0) {
        rules.gameplay_chance = 100;
        document.querySelector('#i_gameplay_chance').value = 100;
    }

    if (rules.pregame_chance > 100 || rules.pregame_chance < 0) {
        rules.pregame_chance = 100;
        document.querySelector('#i_pregame_chance').value = 100;
    }

    if (rules.captain_chance > 100 || rules.captain_chance < 0) {
        rules.captain_chance = 100;
        document.querySelector('#i_legendary_chance').value = 100;
    }

    if (rules.legendary_chance > 100 || rules.legendary_chance < 0) {
        rules.legendary_chance = 100;
        document.querySelector('#i_champion_chance').value = 100;
    }

    let fetched_modes = [];

    let g_builds = gamemodes.filter((g) => { return g.role == r_builds });
    let g_champion = gamemodes.filter((g) => { return g.role == r_champPool });
    let g_gameplay = gamemodes.filter((g) => { return g.role == r_gameplay });
    let g_pregame = gamemodes.filter((g) => { return g.role == r_pregame });
    let g_captain = gamemodes.filter((g) => { return g.role == r_captain });
    let g_legendary = gamemodes.filter((g) => { return g.role == r_legendary });


    // Builds
    if (rules.build_pool > g_builds.length) {
        rules.build_pool = g_builds.length;
    }
    for (let i = 0; i < rules.build_pool; i++) {
        if (roleForCard(rules.build_chance)) {
            fetched_modes.push(getRandomItem(g_builds, fetched_modes));
        }
    }

    // Champions
    if (rules.champion_pool > g_champion.length) {
        rules.champion_pool = g_champion.length;
    }
    for (let i = 0; i < rules.champion_pool; i++) {
        if (roleForCard(rules.champion_chance)) {
            fetched_modes.push(getRandomItem(g_champion, fetched_modes));
        }
    }

    // Gameplay
    if (rules.gameplay_pool > g_gameplay.length) {
        rules.gameplay_pool = g_gameplay.length;
    }
    for (let i = 0; i < rules.gameplay_pool; i++) {
        if (roleForCard(rules.gameplay_chance)) {
            fetched_modes.push(getRandomItem(g_gameplay, fetched_modes));
        }
    }

    // Pre-game
    if (rules.pregame_pool > g_pregame.length) {
        rules.pregame_pool = g_pregame.length;
    }
    for (let i = 0; i < rules.pregame_pool; i++) {
        if (roleForCard(rules.pregame_chance)) {
            fetched_modes.push(getRandomItem(g_pregame, fetched_modes));
        }
    }

    // Captain
    if (rules.has_captain) {
        if (rules.captain_pool > g_captain.length) {
            rules.captain_pool = g_captain.length;
        }
        for (let i = 0; i < rules.captain_pool; i++) {
            if (roleForCard(rules.captain_chance)) {
                fetched_modes.push(getRandomItem(g_captain, fetched_modes));
            }
        }
    }

    // Legendary
    if (rules.legendary_pool > g_legendary.length) {
        rules.legendary_pool = g_legendary.length;
    }
    for (let i = 0; i < rules.legendary_pool; i++) {
        if (roleForCard(rules.legendary_chance)) {
            fetched_modes.push(getRandomItem(g_legendary, fetched_modes));
        }
    }

    return fetched_modes;
}

function generateRules() {

    document.querySelector("#generatedRulesTeam1").innerHTML = "";
    document.querySelector("#generatedRulesTeam2").innerHTML = "";

    document.querySelector("#generatedRulesTeam1").innerHTML = generateAllRules(buildTeam(), "Blue Team:");
    if (document.querySelector("#teamBalanceBox").checked) {
        document.querySelector("#generatedRulesTeam2").innerHTML = generateAllRules(buildTeam(), "Red Team:");
    }

}

function getRandomItem(arr, pool) {
    let rand = arr[Math.floor((Math.random() * arr.length))];
    if (pool.indexOf(rand) != -1) {
        return getRandomItem(arr, pool);
    }
    else {
        return rand;
    }
}

function roleForCard(chance) {
    let num = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    if (num <= chance) {
        return true;
    }
    return false;
}

function toggleSettings() {
    document.querySelectorAll('.adv-stg-hook').forEach(el => {
        el.classList.toggle("adv-stg");
    })
}

try {
    document.querySelector("#listOfRules").innerHTML = generateAllRules(gamemodes);
} catch (error) {
    // do nothing
}

try {
    document.querySelector("#generate").addEventListener("click", () => { generateRules() });
    document.querySelector('#advanced-settings').addEventListener('click', () => { toggleSettings() });
} catch (error) {
    // do nothing
}