import { Component, OnInit } from '@angular/core';
import { NzDrawerPlacement } from 'ng-zorro-antd';

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
    {'categoryName':'Hospitality/Tourism' ,'value':'4'}




  ]


  constructor() { }

  ngOnInit(): void {
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }


  selectCategory(value){

    alert(value);
    this.close();
  }

}
