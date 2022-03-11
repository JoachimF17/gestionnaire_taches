import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { GestionModule } from './components/gestion/gestion.module';
import { AddTacheComponent } from './components/add-tache/add-tache.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GetallItemComponent } from './components/getall/getall-item/getall-item.component';
import { GetallComponent } from './components/getall/getall.component';
import { DetailsComponent } from './components/details/details.component';
import { ModifierComponent } from './components/modifier/modifier.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionComponent,
    AddTacheComponent,
    GetallComponent,
    GetallItemComponent,
    DetailsComponent,
    ModifierComponent
  ],
  imports: [
    GestionModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
