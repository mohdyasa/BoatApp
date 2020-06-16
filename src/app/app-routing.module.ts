import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageboatsComponent } from './manageboats/manageboats.component';


const routes: Routes = [
  {
    path:'', component:ManageboatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
