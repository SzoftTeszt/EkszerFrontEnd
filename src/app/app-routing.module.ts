import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdatokComponent } from './adatok/adatok.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"adatok", component:AdatokComponent},
  
  {path:"", component:HomeComponent},
  {path:"**", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
