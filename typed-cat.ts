import { Human } from './human';

export class TypedCat {
    color: string;
    name: string;

    constructor(color: string, name: string) {
        this.color = color;
        this.name = name;
    }

    beAnnoying() {
        console.log(`${this.name} slaps something off table`);
    }

    beAnnoyingToHuman(human: Human) {
        console.log(`${this.name} jumps on ${human.name} when they aren't looking`);
    }

}
