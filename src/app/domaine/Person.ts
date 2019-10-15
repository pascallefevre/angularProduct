export class Person {


    constructor(private _firstName: string, protected _age: number = 20, private _lastName?: string) {

    }
    public getNom(): string {
        return this._firstName + ' ' + this._lastName;
    }


    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }
}
