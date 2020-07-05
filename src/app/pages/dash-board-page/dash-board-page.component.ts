import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board-page',
  templateUrl: './dash-board-page.component.html',
  styleUrls: ['./dash-board-page.component.scss']
})
export class DashBoardPageComponent implements OnInit {

  productList =[{"id":'1'},{"id":'1'},{"id":'1'},{"id":'1'},{"id":'1'},{"id":'1'},{"id":'1'},{"id":'1'}]

  constructor() { }

  ngOnInit(): void {
  }

}
