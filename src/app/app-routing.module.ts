import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { JobSectionPageComponent } from './pages/job-section-page/job-section-page.component';

 
const routes: Routes = [

{ path: '', redirectTo: '/mainPage', pathMatch: 'full' },

{path:'mainPage' ,component:MainPageComponent, pathMatch :'prefix',
  children:[
    {path:'job-vacancies/:id',component:JobSectionPageComponent}
  ]
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
