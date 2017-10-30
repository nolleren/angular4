export class Recipe implements IRecipe{
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}

interface IRecipe {
    name: string;
    description: string;
    imagePath: string;
}


