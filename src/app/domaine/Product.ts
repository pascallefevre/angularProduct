import {Supplier} from './Supplier';


export class Product
{
    constructor(private _supplier?: any, private _name?: string, private _description?: string, private _price?: number) {}


    get supplier(): Supplier {
        return this._supplier;
    }

    set supplier(value: Supplier) {
        this._supplier = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }
}
