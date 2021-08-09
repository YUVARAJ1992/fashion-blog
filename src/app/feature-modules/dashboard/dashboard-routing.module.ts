import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InboxComponent } from './inbox/inbox.component';
import { SentComponent } from './sent/sent.component';
import { TrashComponent } from './trash/trash.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path:'', component: MainpageComponent , children : [
      {path:'', component : InboxComponent},
      {path:'sent', component : SentComponent},
      {path:'trash', component : TrashComponent},
      {path: 'header', component : HeaderComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
