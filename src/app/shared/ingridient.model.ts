export class Ingridient implements IIngridient{
    constructor(public name: string, public amount: number){}
}

interface IIngridient {
    name: string;
    amount: number;
}