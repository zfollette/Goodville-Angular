export class item {
    itemDesc: string;
    itemDone: boolean;
    
    constructor(name: string, done: boolean) {
        this.itemDesc = name;
        this.itemDone = done;
    }
}

