import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { InboxComponent } from './inbox/inbox.component';
import { SentComponent } from './sent/sent.component';
import { TrashComponent } from './trash/trash.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    InboxComponent,
    SentComponent,
    TrashComponent,
    MainpageComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
