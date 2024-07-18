import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './user/home/home.component';
import { DietComponent } from './user/diet/diet.component';
import { HeaderComponent } from './user/header/header.component';
import { CommunicationComponent } from './user/communication/communication.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DietComponent,
    HeaderComponent,
    CommunicationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
