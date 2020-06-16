import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageboatsComponent } from './manageboats/manageboats.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RentComponent } from './rent/rent.component';

@NgModule({
   declarations: [
      AppComponent,
      ManageboatsComponent,
      RentComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      HttpClientModule,
      MaterialModule,
      BrowserAnimationsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
