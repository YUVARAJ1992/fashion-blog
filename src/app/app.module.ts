import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from './feature-modules/layout/layout.module';

import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InboxComponent } from './inbox/inbox.component';
import { SentItemsComponent } from './sent-items/sent-items.component';
import { DeletedComponent } from './deleted/deleted.component';
import { TrashComponent } from './trash/trash.component';

import { ApiService } from './api.service';
import { ProductComponent } from './product/product.component';
import { StudentRecordComponent } from './student-record/student-record.component';
import { EmployeeComponent } from './employee/employee.component';
import { SampleModule } from './feature-modules/sample/sample.module';
import { DashboardModule } from './feature-modules/dashboard/dashboard.module';
import { LoginModule } from './feature-modules/login/login.module'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    InboxComponent,
    SentItemsComponent,
    DeletedComponent,
    TrashComponent,
    ProductComponent,
    StudentRecordComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule,
    HttpClientModule,
    SampleModule,
    DashboardModule,
    LoginModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
