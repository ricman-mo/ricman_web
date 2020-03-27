import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  policies: any;

  constructor() { }

  

  ngOnInit() {
    this.policies = [
      {id: 0, name: "policy001"},
      {id: 2, name: "policy002"},
      {id: 3, name: "policy003"},
      {id: 4, name: "policy004"},
      {id: 5, name: "policy005"}, 
    ];
  }
  image1_src='assets/Desert.jpg';
  image2_src='assets/Jellyfish.jpg';
  image3_src='assets/Lighthouse.jpg';

}
