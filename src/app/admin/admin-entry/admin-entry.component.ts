import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-entry',
  templateUrl: './admin-entry.component.html',
  styleUrls: ['./admin-entry.component.scss']
})
export class AdminEntryComponent implements OnInit {

  tags = [{
    displayValue: 'list'
  }, {
    displayValue: 'of'
  }, {
    displayValue: 'predefined'
  }, {
    displayValue: '个人'
  }];

  constructor() { }

  ngOnInit() {
  }

  OnCategoryChange($event) {
    console.log($event)
  }

}
