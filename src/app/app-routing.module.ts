import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InboxComponent } from './inbox/inbox.component';
import { SentItemsComponent } from './sent-items/sent-items.component';
import { DeletedComponent } from './deleted/deleted.component';
import { TrashComponent } from './trash/trash.component';
import { ProductComponent } from './product/product.component';
import { StudentRecordComponent } from './student-record/student-record.component';
import { EmployeeComponent } from './employee/employee.component';

//import { AuthenticationModule } from './feature-modules/authentication/authentication.module'; 

const routes: Routes = [
  {path:'', loadChildren : () => import('./feature-modules/authentication/authentication.module').then(module => module.AuthenticationModule)},
  {
    path:'home', loadChildren: () => import('./feature-modules/layout/layout.module').then(module => module.LayoutModule)
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'dashboard', component:LandingPageComponent,  children : [
      {path:'', component:InboxComponent },
      {path:'sent', component:SentItemsComponent },
      {path:'deleted', component:DeletedComponent },
      {path:'trash', component:TrashComponent},
      {path:'product', component:ProductComponent},
      {path:'student-record', component:StudentRecordComponent},
      {path:'employee', component:EmployeeComponent}
    ]
  },
  {
    path:'newlogin', loadChildren : () => import('./feature-modules/login/login.module').then(module => module.LoginModule)
  },
  {
    path:'newdashboard', loadChildren : () => import('./feature-modules/dashboard/dashboard.module').then(module => module.DashboardModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
