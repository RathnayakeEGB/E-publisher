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
    {"JobTile":'Accountent','description':' Konnect Net Pvt Ltd Please refer the advert Excellent communication skills in Spanish Language - written and verbal testing 1 testing 1 testing 1 testing 1  ','contactNo':'0171671711','catId':'2','comapny':'ABC pvt','openDate':'2020-12-21','endDate':'2021-01-05'},
    {"JobTile":'Clarck','description':'dsfsdfffffffffffffsfsdsssfsf','contactNo':'o74334334343','catId':'2','comapny':'KKC pvt','openDate':'2020-12-21','endDate':'2021-01-05'},
    {"JobTile":'Accountent','description':' Konnect Net Pvt Ltd Please refer the advert Excellent communication skills in Spanish Language - written and verbal testing 1 testing 1 testing 1 testing 1  ','contactNo':'0171671711','catId':'2','comapny':'ABC pvt','openDate':'2020-12-21','endDate':'2021-01-05'},
    {"JobTile":'Accountent','description':' Konnect Net Pvt Ltd Please refer the advert Excellent communication skills in Spanish Language - written and verbal testing 1 testing 1 testing 1 testing 1  ','contactNo':'0171671711','catId':'2','comapny':'ABC pvt','openDate':'2020-12-21','endDate':'2021-01-05'},
    {"JobTile":'Accountent','description':' Konnect Net Pvt Ltd Please refer the advert Excellent communication skills in Spanish Language - written and verbal testing 1 testing 1 testing 1 testing 1  ','contactNo':'0171671711','catId':'2','comapny':'ABC pvt','openDate':'2020-12-21','endDate':'2021-01-05'},
    {"JobTile":'Accountent','description':' Konnect Net Pvt Ltd Please refer the advert Excellent communication skills in Spanish Language - written and verbal testing 1 testing 1 testing 1 testing 1  ','contactNo':'0171671711','catId':'2','comapny':'ABC pvt','openDate':'2020-12-21','endDate':'2021-01-05'},
    {"JobTile":'Accountent','description':' Konnect Net Pvt Ltd Please refer the advert Excellent communication skills in Spanish Language - written and verbal testing 1 testing 1 testing 1 testing 1  ','contactNo':'0171671711','catId':'2','comapny':'ABC pvt','openDate':'2020-12-21','endDate':'2021-01-05'},
    {"JobTile":'Accountent','description':' Konnect Net Pvt Ltd Please refer the advert Excellent communication skills in Spanish Language - written and verbal testing 1 testing 1 testing 1 testing 1  ','contactNo':'0171671711','catId':'2','comapny':'ABC pvt','openDate':'2020-12-21','endDate':'2021-01-05'},
    {"JobTile":'Accountent','description':' Konnect Net Pvt Ltd Please refer the advert Excellent communication skills in Spanish Language - written and verbal testing 1 testing 1 testing 1 testing 1  ','contactNo':'0171671711','catId':'2','comapny':'ABC pvt','openDate':'2020-12-21','endDate':'2021-01-05'},
    {"JobTile":'Accountent','description':' Konnect Net Pvt Ltd Please refer the advert Excellent communication skills in Spanish Language - written and verbal testing 1 testing 1 testing 1 testing 1  ','contactNo':'0171671711','catId':'2','comapny':'ABC pvt','openDate':'2020-12-21','endDate':'2021-01-05'},
    {"JobTile":'Accountent','description':' Konnect Net Pvt Ltd Please refer the advert Excellent communication skills in Spanish Language - written and verbal testing 1 testing 1 testing 1 testing 1  ','contactNo':'0171671711','catId':'2','comapny':'ABC pvt','openDate':'2020-12-21','endDate':'2021-01-05'},
    {"JobTile":'Accountent','description':' Konnect Net Pvt Ltd Please refer the advert Excellent communication skills in Spanish Language - written and verbal testing 1 testing 1 testing 1 testing 1  ','contactNo':'0171671711','catId':'2','comapny':'ABC pvt','openDate':'2020-12-21','endDate':'2021-01-05'},
    {"JobTile":'Accountent','description':' Konnect Net Pvt Ltd Please refer the advert Excellent communication skills in Spanish Language - written and verbal testing 1 testing 1 testing 1 testing 1  ','contactNo':'0171671711','catId':'2','comapny':'ABC pvt','openDate':'2020-12-21','endDate':'2021-01-05'},
    {"JobTile":'Accountent','description':' Konnect Net Pvt Ltd Please refer the advert Excellent communication skills in Spanish Language - written and verbal testing 1 testing 1 testing 1 testing 1  ','contactNo':'0171671711','catId':'2','comapny':'ABC pvt','openDate':'2020-12-21','endDate':'2021-01-05'},
    {"JobTile":'Accountent','description':' Konnect Net Pvt Ltd Please refer the advert Excellent communication skills in Spanish Language - written and verbal testing 1 testing 1 testing 1 testing 1  ','contactNo':'0171671711','catId':'2','comapny':'ABC pvt','openDate':'2020-12-21','endDate':'2021-01-05'},
    {"JobTile":'Accountent','description':' Konnect Net Pvt Ltd Please refer the advert Excellent communication skills in Spanish Language - written and verbal testing 1 testing 1 testing 1 testing 1  ','contactNo':'0171671711','catId':'2','comapny':'ABC pvt','openDate':'2020-12-21','endDate':'2021-01-05'},

  ]

  loading = true;
  vacancyList:any =[];
  isVisibleMiddle = false;
 
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


  showModalMiddle(): void {
    this.isVisibleMiddle = true;
  }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }

  handleOkMiddle(): void {
    console.log('click ok');
    this.isVisibleMiddle = false;
  }

}
