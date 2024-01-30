import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';

import { DonarAlimentoComponent } from './comestibles/comestibles.component';
import { HomeComponent } from './home/home.component';
import { AdopcionComponent } from './adopcion/adopcion.component';
import { ImagencentralComponent } from './imagencentral/imagencentral.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({

  declarations: [
    AppComponent,
    NewcomponentComponent,
    
    DonarAlimentoComponent,
    HomeComponent,
    AdopcionComponent,
    ImagencentralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
