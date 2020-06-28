import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-job-section-page',
  templateUrl: './job-section-page.component.html',
  styleUrls: ['./job-section-page.component.scss']
})
export class JobSectionPageComponent implements OnInit {

  categorieyList=[
    {'categoryName':'It/Information Teachnology' ,'value':'1'},
    {'categoryName':'Marketing' ,'value':'2'},
    {'categoryName':'Finance' ,'value':'3'},
    {'categoryName':'Goverment' ,'value':'4'},
    {'categoryName':'Eductionnal' ,'value':'4'},
    {'categoryName':'Hospitality/Tourism' ,'value':'5'},
    {'categoryName':'Hospitality/Tourism' ,'value':'6'},
    {'categoryName':'Hospitality/Tourism' ,'value':'7'},
    {'categoryName':'Goverment' ,'value':'8'},
    {'categoryName':'Eductionnal' ,'value':'9'},
    {'categoryName':'Hospitality/Tourism' ,'value':'9'},
    {'categoryName':'Hospitality/Tourism' ,'value':'10'},
    {'categoryName':'Hospitality/Tourism' ,'value':'11'},

  ]

  jobList =[
    {"JobTile":'Accountent','Description':'sddddddddddddddddddddddddddddddddddddddddddddddd','contactNo':'0171671711','catId':'2','comapny':'ABC pvt'},
    {"JobTile":'Clarck','Description':'dsfsdfffffffffffffsfsdsssfsf','contactNo':'o74334334343','catId':'2','comapny':'KKC pvt'}

  ]

  loading = true;

  vacancyList:any =[];


  constructor(public router: ActivatedRoute) {

    
    this.router.params.subscribe( params => {
      
      if(params.id==='2'){
        this.vacancyList =[...this.jobList];
        this.loading =false;
      }else{
        this.vacancyList =[...[]]
        this.loading =false;
      }

    } );

   }

  ngOnInit(): void {

  }

}
