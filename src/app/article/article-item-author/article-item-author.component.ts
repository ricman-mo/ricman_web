import { Component, OnInit ,Input} from '@angular/core';
import {Article} from '../../models'

@Component({
  selector: 'article-item-author',
  templateUrl: './article-item-author.component.html',
  styleUrls: ['./article-item-author.component.scss']
})
export class ArticleItemAuthorComponent implements OnInit {
  @Input() article: Article ;
  constructor() { }

  ngOnInit() {
  }

}
