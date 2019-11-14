import Ship from "./ship.js";
import Truck from "./truck.js";
import Cost from "./cost.js";


export default class Data {
    constructor() {
        this.shipList = [];
        this.truckList = [];
        this.costList = [];
    }

    save() {
        localStorage.shipList = JSON.stringify(this.shipList);
        localStorage.truckList = JSON.stringify(this.truckList);
        localStorage.costList = JSON.stringify(this.costList);
    }

    restore() {
        this.shipList = this.restoreClasses('shipList', Ship);
        this.truckList = this.restoreClasses('truckList', Truck);
        this.costList = this.restoreClasses('costList', Cost);
    }

    restoreClasses(name, className) {
        let result = [];
        if (localStorage.getItem(name)) {
            const objectList = JSON.parse(localStorage.getItem(name));
            objectList.forEach((object) => {
                const model = new className();
                result.push(Object.assign(model, object));
            });
        }
        return result;
    }

}