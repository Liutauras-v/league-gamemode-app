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
gamemodes.push(new Gamemode("Invisible weak spots", "Armor / Magic penetration items are banned (including some item passives that have penetration)", 10, r_builds, "nopen.png"));
gamemodes.push(new Gamemode("Classic builds", "Mythic items are banned", 10, r_builds, "nomythic.png"));
gamemodes.push(new Gamemode("Mythic power spike", "Mythic item can only be purchased as a last item", 10, r_builds, "tryforce.png"));

gamemodes.push(new Gamemode("Mage champions only", "$", 10, r_champPool, "rabadons.png"));
gamemodes.push(new Gamemode("Tank champions only", "$", 10, r_champPool, "rabadons.png"));
gamemodes.push(new Gamemode("Fighter champions only", "$", 10, r_champPool, "rabadons.png"));
gamemodes.push(new Gamemode("Assassin champions only", "$", 10, r_champPool, "rabadons.png"));
gamemodes.push(new Gamemode("Marksman champions only", "$", 10, r_champPool, "rabadons.png"));
gamemodes.push(new Gamemode("Support champions only", "$", 10, r_champPool, "rabadons.png"));

gamemodes.push(new Gamemode("No items until 5 minutes", "$", 10, r_gameplay, "rabadons.png"));
gamemodes.push(new Gamemode("No items until 10 minutes", "$", 10, r_gameplay, "rabadons.png"));
gamemodes.push(new Gamemode("No items until 15 minutes", "$", 10, r_gameplay, "rabadons.png"));
gamemodes.push(new Gamemode("No items until first blood", "$", 10, r_gameplay, "rabadons.png"));
gamemodes.push(new Gamemode("No items until first drake (any team)", "$", 10, r_gameplay, "rabadons.png"));
gamemodes.push(new Gamemode("No items until first tower (any team)", "$", 10, r_gameplay, "rabadons.png"));
gamemodes.push(new Gamemode("No items until first tower", "$", 10, r_gameplay, "rabadons.png"));
gamemodes.push(new Gamemode("No items until first kill", "$", 10, r_gameplay, "rabadons.png"));
gamemodes.push(new Gamemode("No items until first death", "$", 10, r_gameplay, "rabadons.png"));
gamemodes.push(new Gamemode("No wards", "$", 10, r_gameplay, "rabadons.png"));
gamemodes.push(new Gamemode("Don't fight until 5 minutes", "$", 10, r_gameplay, "rabadons.png"));
gamemodes.push(new Gamemode("Don't fight until 10 minutes", "$", 10, r_gameplay, "rabadons.png"));
gamemodes.push(new Gamemode("Missed cannon forces all summoner spells (until 10 minutes)", "$", 10, r_gameplay, "rabadons.png"));
gamemodes.push(new Gamemode("Missed cannon forces to recall (until 10 minutes)", "$", 10, r_gameplay, "rabadons.png"));
gamemodes.push(new Gamemode("Don't go back while a jungle buff is active (exepct dragon)", "$", 10, r_gameplay, "rabadons.png"));

gamemodes.push(new Gamemode("Precision rune tree only", "$", 10, r_pregame, "rabadons.png"));
gamemodes.push(new Gamemode("Domination rune tree only", "$", 10, r_pregame, "rabadons.png"));
gamemodes.push(new Gamemode("Sorcery rune tree only", "$", 10, r_pregame, "rabadons.png"));
gamemodes.push(new Gamemode("Resolve rune tree only", "$", 10, r_pregame, "rabadons.png"));
gamemodes.push(new Gamemode("Inspiration rune tree only", "$", 10, r_pregame, "rabadons.png"));
gamemodes.push(new Gamemode("Flash summoner spell is banned", "$", 10, r_pregame, "rabadons.png"));
gamemodes.push(new Gamemode("Teleport summoner spell is mandatory", "$", 10, r_pregame, "rabadons.png"));

gamemodes.push(new Gamemode("I'm the captain here", "Team captain ignores all other rules", 10, r_captain, "rabadons.png"));
gamemodes.push(new Gamemode("Instalock", "Team captain has to play Yasuo or Yone (Yasuo and Yone can't be banned)", 10, r_captain, "rabadons.png"));
gamemodes.push(new Gamemode("Prisoner", "Team captain can only buy items after getting his first kill", 10, r_captain, "rabadons.png"));

gamemodes.push(new Gamemode("Opposite day", "Win by losing", 10, r_legendary, "rabadons.png"));


console.log(gamemodes);


function generateAllRules(){
    
    let HTML = '';

    gamemodes.forEach(gm => {
        HTML += '<div class="col">';
        HTML += '<div class="card shadow-sm">';
        HTML += `<span class="card-role" style="border: 2px solid ${gm.role.color}; color: ${gm.role.color};">${gm.role.name}</span>`;
        HTML += '<div class="card-imgbox">';
        HTML += `<img class="card-img-top" src="/img/${gm.img}" alt="${gm.img}" />`;
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
