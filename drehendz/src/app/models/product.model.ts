export class ProductModel {
    constructor(name? : string, description? : string, price? : number )
     {
         this.name = name;
         this.description = description;
         this.price = price;

     }

     public name: string;
     public description:string;
     public price: number;

}