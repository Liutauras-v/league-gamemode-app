import Game from './game.js';
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
gamemodes.push(new Gamemode("Pillow fight", "Support items only", 10, r_builds, "spellthiefs.png"));
gamemodes.push(new Gamemode("What is this healing?", "Grievous wounds items are banned (including ignite)", 10, r_builds, "blood.png"));
gamemodes.push(new Gamemode("No penetration", "Armor / Magic penetration items are banned (including some item passives that have penetration)", 10, r_builds, "nopen.png"));
gamemodes.push(new Gamemode("Classic builds", "Mythic items are banned", 10, r_builds, "nomythic.png"));
gamemodes.push(new Gamemode("Mythic power spike", "Mythic item can only be purchased as a last item", 10, r_builds, "tryforce.png"));

gamemodes.push(new Gamemode("Mages", "Mage champions only", 10, r_champPool, "mage.png"));
gamemodes.push(new Gamemode("Tanks", "Tank champions only", 10, r_champPool, "tank.png"));
gamemodes.push(new Gamemode("Fighters", "Fighter champions only", 10, r_champPool, "fighter.png"));
gamemodes.push(new Gamemode("Assassins", "Assassin champions only", 10, r_champPool, "assassin.png"));
gamemodes.push(new Gamemode("Marksmans", "Marksman champions only", 10, r_champPool, "adc.png"));
gamemodes.push(new Gamemode("Supports", "Support champions only (Mage supports (I.E. Lux, Swain) are not allowed)", 10, r_champPool, "support.png"));

gamemodes.push(new Gamemode("Forgot to buy items", "No items until 5 minutes", 10, r_gameplay, "5min.png"));
gamemodes.push(new Gamemode("Forgot to buy items... again", "No items until 10 minutes", 10, r_gameplay, "10min.png"));
gamemodes.push(new Gamemode("I don't need items", "No items until 15 minutes", 10, r_gameplay, "15min.png"));
gamemodes.push(new Gamemode("Bloody items", "No items until first blood", 10, r_gameplay, "firstblood.png"));
gamemodes.push(new Gamemode("Drake items", "No items until first drake (any team)", 10, r_gameplay, "drakekill.png"));
gamemodes.push(new Gamemode("Stone items (any team)", "No items until first tower (any team)", 10, r_gameplay, "turret1.png"));
gamemodes.push(new Gamemode("Stone items", "No items until your team  gets a first tower", 10, r_gameplay, "turret2.png"));
gamemodes.push(new Gamemode("Bloody items (personal)", "You can only buy items after you get your first kill", 10, r_gameplay, "firstkill.png"));
gamemodes.push(new Gamemode("ARAM items", "No items until your first death", 10, r_gameplay, "aram.png"));
gamemodes.push(new Gamemode("Darkness", "Wards are not allowed. Oracle Lens is allowed", 10, r_gameplay, "noward.png"));
gamemodes.push(new Gamemode("Bro lane", "Don't fight until 5 minutes", 10, r_gameplay, "cull.png"));
gamemodes.push(new Gamemode("Nasus on copium", "Don't fight until 10 minutes", 10, r_gameplay, "nasusq.png"));
gamemodes.push(new Gamemode("*Slaps keyboard*", "Missed cannon forces all summoner spells (until 10 minutes)", 10, r_gameplay, "flash.png"));
gamemodes.push(new Gamemode("AFK", "Missed cannon forces you to recall (until 10 minutes)", 10, r_gameplay, "recall.png"));
gamemodes.push(new Gamemode("Jungle curse", "Don't go back while a jungle buff is active (exepct dragon)", 10, r_gameplay, "baron.png"));
gamemodes.push(new Gamemode("Low elo", "Epic monsters can't be killed", 10, r_gameplay, "nodrake.png"));

gamemodes.push(new Gamemode("Precision rune tree only", "You can only use precision rune tree", 10, r_pregame, "precrune.png"));
gamemodes.push(new Gamemode("Domination rune tree only", "You can only use domination rune tree", 10, r_pregame, "dominationrune.png"));
gamemodes.push(new Gamemode("Sorcery rune tree only", "You can only use sorcery rune tree", 10, r_pregame, "sorceryrune.png"));
gamemodes.push(new Gamemode("Resolve rune tree only", "You can only use resolve rune tree", 10, r_pregame, "resolverune.png"));
gamemodes.push(new Gamemode("Inspiration rune tree only", "You can only use inspiration rune tree", 10, r_pregame, "insprune.png"));
gamemodes.push(new Gamemode("Flashless", "Flash summoner spell is banned", 10, r_pregame, "noflash.png"));
gamemodes.push(new Gamemode("Pro play", "Teleport summoner spell is mandatory", 10, r_pregame, "tp.png"));
gamemodes.push(new Gamemode("Disco nunu", "Ghost and clense summoner spells are mandatory (ghost and smite for junglers)", 10, r_pregame, "nunu.png"));

gamemodes.push(new Gamemode("I'm the captain here", "Team captain ignores all other rules", 10, r_captain, "gpface.png"));
gamemodes.push(new Gamemode("Kill command", "Team captain can ask anyone at any point to die to him (once per game)", 10, r_captain, "killcom.png"));
gamemodes.push(new Gamemode("Instalock", "Team captain has to play Yasuo or Yone (Yasuo and Yone can't be banned)", 10, r_captain, "yasuo.png"));
gamemodes.push(new Gamemode("Prisoner", "Team captain can only buy items after getting his first kill", 10, r_captain, "prisoner.png"));

gamemodes.push(new Gamemode("Opposite day", "Win by losing", 10, r_legendary, "opday.png"));


console.log(gamemodes);


function generateAllRules(){
    
    let HTML = '';

    gamemodes.forEach(gm => {
        HTML += '<div class="col">';
        HTML += '<div class="card shadow-sm">';
        HTML += `<span class="card-role" style="border: 2px solid ${gm.role.color}; color: ${gm.role.color};">${gm.role.name}</span>`;
        HTML += '<div class="card-imgbox">';
        HTML += `<img class="card-img-top" src="./img/${gm.img}" alt="${gm.img}" />`;
        HTML += '</div>';
        HTML += '<div class="card-body">';
        HTML += `<h5 class="card-text">${gm.name}</h3>`;
        HTML += `<p class="card-text">${gm.desc}</p>`;
        HTML += '</div></div></div>';

    });

    return HTML;
}

try {
    document.querySelector("#listOfRules").innerHTML = generateAllRules();
} catch (error) {
    // do nothing
}
