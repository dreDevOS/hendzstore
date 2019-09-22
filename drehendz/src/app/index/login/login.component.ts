import { Component, OnInit, ɵɵsanitizeUrlOrResourceUrl } from '@angular/core';
import {NgForm, EmailValidator} from "@angular/forms";
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import {ToastrService} from "../../shared/services/toastr.service";
import { router } from 'src/app/app.routes';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  user= {
    emailId: "",
    loginPassword:""
  };

  errorInUserCreate= false;
  errorMessage: any;
  createUser;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private toastService: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.createUser = new User();
  }

  ngOnInit() {}

  addUser(userForm: NgForm) {
    userForm.value ["isAdmin"]= false;
    this.authService
    .createUserWithEmailAndPassword(userForm.value["emailId"], userForm.value["password"])
    .then((res)   => { const user = {email: res.user.email,
                                      famil_name: res.user.displayName,
                                       uid: res.user.uid,
                                      verified_email: res.user.emailVerified,
                                      phoneNumber: res.user.phoneNumber,
                                    picture: res.user.photoURL};
                                  this.userService.createUser(user);
                                this.toastService.success("Registering", "User Registerion");
                              setTimeout((router: Router)   => {
                                $("#createdUserForm").modal("hide");
                                this.router.navigate(["/"]);

                              }, 1500);
         }).catch((err)  =>{this.errorInUserCreate = true;
        this.errorMessage = err;
      this.toastService.error("Error while Creating User", err);});
  }
  

  signInWithEmail(userForm: NgForm){
    this.authService
    .signInRegular(userForm.value["emailId"], userForm.value["loginPassword"])
    .then((res)   => {this.toastService.success("Authentication Success", "Logging in please wait"); 
   const returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");

   setTimeout((router: Router)  => {this.router.navigate([returnUrl  || "/"]);
  }, 1500);
  this.router.navigate(["/"]);
  })
  .catch((err) => {this.toastService.error("Authentication Failed", "Invalid Credentials, Please check your credentials");
});
  }
signInWithGoogle(){
  this.authService 
  .signInWithGoogle()
  .then ((res) =>    {
    if(res.additionalUserInfo.isNewUser){
      this.userService.createUser(res.additionalUserInfo.profile);
    }
    const returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
    location.reload();
    this.router.navigate(["/"]);
  })
  .catch((err)  => {this.toastService.error ("Error Occured", "Please try again later"); 
});  
}
}