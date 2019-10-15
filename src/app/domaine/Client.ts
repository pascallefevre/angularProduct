import {Person} from './Person';
import {Product} from './Product';


export class Client extends Person {
    constructor(firstName, lastName, age, private _ca : number, private _productList : Array<Product>)
    {
        super( firstName, lastName, age);
    }


    get ca(): number {
        return this._ca;
    }

    set ca(value: number) {
        this._ca = value;
    }

    get productList(): Array<Product> {
        return this._productList;
    }

    set productList(value: Array<Product>) {
        this._productList = value;
    }
}
