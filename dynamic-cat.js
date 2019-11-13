class DynamicCat {

    constructor(color, name) {
        this.color = color;
        this.name = name;
    }   

    beAnnoying() {
        console.log(`${this.name} slaps something off table`);
    }

    beAnnoyingToHuman(human) {
        console.log(`${this.name} jumps on ${human.name} when they aren't looking`);
    }
}

module.exports = DynamicCat;
