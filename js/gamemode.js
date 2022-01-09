export default class Gamemode {

    constructor(name, desc, cost, role, img) {
        this.name = name;
        this.desc = desc;
        this.cost = cost;
        this.role = role;
        this.img = img;
    }

    getRarity() {

        const rarities = [
            { name: "epic", cost_range: 0, color: "#13DFF8", img: "./img/gems/Epic.png", weight: 0 },
            { name: "legendary", cost_range: 25, color: "#E8101B", img: "./img/gems/legendary.png", weight: 1 },
            { name: "hextech", cost_range: 50, color: "#D50FCC", img: "./img/gems/Hextech.png", weight: 2 },
            { name: "ultimate", cost_range: 75, color: "#F8941A", img: "./img/gems/Ultimate.png", weight: 3 }
        ];

        let max_rarity;
        rarities.forEach(r => {
            if (r.cost_range < this.cost) {
                max_rarity = r;
            }
        });

        return max_rarity;

    }

}