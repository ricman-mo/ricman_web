import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-scroll-message',
  templateUrl: './scroll-message.component.html',
  styleUrls: ['./scroll-message.component.scss']
})
export class ScrollMessageComponent implements OnInit ,AfterViewInit {

  messages:any;
  constructor() { }

  ngOnInit() {
    AOS.init();
   
  }

  ngAfterViewInit(){
  
  }

}
