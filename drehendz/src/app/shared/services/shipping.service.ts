import {AngularFireList, AngularFireObject, AngularFireDatabase } from "angularfire2/database";
import {Billing} from "./../models/billing";
import {Injectable} from "@angular/core";


@Injectable({
    providedIn: "root"
})
export class ShippingService {
    shippings: AngularFireList<Billing>;
    shipping: AngularFireObject<Billing>;


constructor (private db: AngularFireDatabase){
    this.getshippings();

}
getshippings(){
    this.shippings = this.db.list("shippings");
    console.log(this.getshippings);
    return this.shippings;
}
createshippings(data: Billing) {
    // need to fix the create  shipping method in the shipping  service in next update 
 //  this.shippings.push(data);

}
getshippingsById(key: string) {
    this.shipping = this.db.object("products/ + key");
    return this.shipping;
}
updateshipping(data: Billing) {
    this.shippings.update(data.$key, data)
}
deleteshipping(key: string) {
    this.shippings.remove(key);
}
}