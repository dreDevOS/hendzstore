import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase, AngularFireObject} from "angularfire2/database";
import { User, AppUser } from '../models/user';
import * as moment from "moment";
import * as firebase from 'firebase';

  
 
@Injectable({
  providedIn: 'root'
})
export class UserService {


  selectedUser: User = new User ();
  users: AngularFireList<User>;

  location = { lat: null,lon: null};


  constructor(private db: AngularFireDatabase){
    // this.getUsers();
  }
  
  save(user: firebase.User){
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  get(uid: string): AngularFireObject<AppUser> {
    return this.db.object('/users/' + uid);
  }
  //  getUsers()
  //  {
  //    this.users = this.db.list("clients");
  //    return this.users;
 
  //  }
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
