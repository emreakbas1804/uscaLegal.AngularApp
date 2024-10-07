import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../Shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { FaqComponent } from './faq/faq.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IndexComponent,
    ContactComponent,
    AboutUsComponent,
    ServicesComponent,
    ServiceDetailComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    FormsModule   
  ]
})
export class HomeModule { }
