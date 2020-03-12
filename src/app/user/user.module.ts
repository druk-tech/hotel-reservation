import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PortalComponent } from './portal/portal.component';
import { ProfileComponent } from './profile/profile.component';
import {UserComponent} from './user.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PortalComponent, ProfileComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
