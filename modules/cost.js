import ItemWithId from "./item_with_id.js";

export default class Cost extends ItemWithId {
    constructor(model, cargoCost, distanceCost) {
        super();
        this.model = model;
        this.cargoCost = cargoCost;
        this.distanceCost = distanceCost;
    }
}