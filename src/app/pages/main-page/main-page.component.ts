import { Component, OnInit } from '@angular/core';
import { NzDrawerPlacement } from 'ng-zorro-antd';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  visible = false;
  placement: NzDrawerPlacement = 'top';

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

  url :boolean =false;

  constructor(public router2: ActivatedRoute,public router: Router) {

    

   }

  ngOnInit(): void {

    this.router2.url.subscribe(vlue=>{
      console.log("url : ",vlue);

      if(vlue[0].path ==='dash-board'){
        this.url =false;
      }else{
        this.url =true;
      }
      
    })

  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }


  selectCategory(value){

    // console.log(value);
    

    this.router.navigateByUrl('mainPage/job-vacancies/'+value.value,{state:value});
    this.close();
  }

}
