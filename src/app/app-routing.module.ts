import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdopcionComponent } from './adopcion/adopcion.component';
import { HomeComponent } from './home/home.component';
import { DonarAlimentoComponent } from './comestibles/comestibles.component';

const routes: Routes = [
  {path:'home', component: HomeComponent, pathMatch: 'full'},
  {path:'adopta', component: AdopcionComponent, pathMatch: "full"},
  {path:'comestibles', component: DonarAlimentoComponent, pathMatch: "full"},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
