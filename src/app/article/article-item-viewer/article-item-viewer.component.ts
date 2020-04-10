import { Component, OnInit ,Input} from '@angular/core';
import {Article} from '../../models'
@Component({
  selector: 'article-item-viewer',
  templateUrl: './article-item-viewer.component.html',
  styleUrls: ['./article-item-viewer.component.scss']
})
export class ArticleItemViewerComponent implements OnInit {

  @Input() article: Article ;
  imgSrc = '';
  articleTitle = ''
  articleOverView = ''
  constructor() { }

  ngOnInit() {
    console.log(this.article);
    
  }



}
