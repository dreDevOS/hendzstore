import { UserComponent } from './user.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/services/auth_guard';

export const UserRoutes: Routes = [
	{
		path: 'users',
		component: UserComponent,
		canActivate: [ AuthGuard ],
		children: [
			{
				path: '',
				component: UserAccountComponent,
				outlet: 'profileOutlet'
			}
		]
	}
];