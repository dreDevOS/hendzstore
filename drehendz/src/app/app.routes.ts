import {AuthGuard} from '../app/auth/auth.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './user/sign-in/sign-in.component';

export const router:  Routes = 
[
    {path: 'sign-in', component: SignInComponent, canActivate: [AuthGuard] }
 ]

 
]
export const routes: ModuleWithProviders = RouterModule.forRoot(router)