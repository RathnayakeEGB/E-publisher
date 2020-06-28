import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';

 
const routes: Routes = [

{path:'home-page' ,component:MainPageComponent},
{path:'', redirectTo : '/home-page',pathMatch :'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
