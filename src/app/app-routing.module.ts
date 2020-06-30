import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { JobSectionPageComponent } from './pages/job-section-page/job-section-page.component';
import { DashBoardPageComponent } from './pages/dash-board-page/dash-board-page.component';

 
const routes: Routes = [

{ path: '', redirectTo: '/mainPage/dash-board', pathMatch: 'full' },

{path:'mainPage' ,component:MainPageComponent, pathMatch :'prefix',
  children:[
    {path:'job-vacancies/:id',component:JobSectionPageComponent},
    {path:'dash-board', component:DashBoardPageComponent},

  ]
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
