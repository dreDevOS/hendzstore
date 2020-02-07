import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase} from "angularfire2/database";
import { User } from '../models/user';
import * as moment from "moment";

  
 
@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User = new User ();
  users: AngularFireList<User>;

  location = { lat: null,
               lon: null};


  constructor(private db: AngularFireDatabase)
   
  {
   this.getUsers();


   }

   getUsers()
   {
     this.users = this.db.list("clients");
     return this.users;

     
   }
   createUser(data: any) 
   {
     data.location = this.location;
     data.createdOn = moment(new Date()).format("X");
     data.isAdmin = false;
     this.users.push(data);
   }


   isAdmin(emailId: string) 
   {
     return this.db.list("clients", ref =>
      ref.orderByChild("email").equalTo(emailId));
   }

   updateUser( user: User){
     this.users.update(user.$key, user);
    }


     setLocation(lat, lon)
      {
        this.location.lat = lat;
        this.location.lon = lon

     }
}
