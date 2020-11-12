export default class Item {
    constructor(name) {
        this.name = name;
        this.checked = false;
        this.tags = {
            dairy: false,
            vegetable: false,
            fruit: false,
            meat: false,
            sweet: false,
            fiber: false,
            other: false
        }
    }
}