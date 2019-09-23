import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routing';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserComponent } from './user.component';





@NgModule ({

    imports: [CommonModule, SharedModule, RouterModule.forChild(UserRoutes)],
    declarations: [UserComponent, UserAccountComponent],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA
    ]
})

export class UserModule{}