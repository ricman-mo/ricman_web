import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-over-badge',
  templateUrl: './article-over-badge.component.html',
  styleUrls: ['./article-over-badge.component.scss']
})
export class ArticleOverBadgeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  collectionNum = 5;
  commentNum = 4;
  likeNum = 20;
}
