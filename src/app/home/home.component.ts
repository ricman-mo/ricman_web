import { Component, OnInit } from '@angular/core';
import { ArticleService, TokenStorageService} from '../servives';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  atricles: any;

  constructor(private articleService:ArticleService) { }

  

  ngOnInit() {
    this.articleService.getArticles().subscribe(items=>{
      this.atricles = items;
      console.log(items);
    })
  }



}
