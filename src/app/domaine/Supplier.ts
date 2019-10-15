export class Supplier {
    constructor(public _compagnyName: string, private _bankAccountNumber: string) {}

    get compagnyName(): string {
        return this._compagnyName;
    }

    set compagnyName(value: string) {
        this._compagnyName = value;
    }

    get bankAccountNumber(): string {
        return this._bankAccountNumber;
    }

    set bankAccountNumber(value: string) {
        this._bankAccountNumber = value;
    }
}
