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

  constructor() { }

  ngOnInit(): void {
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

}
