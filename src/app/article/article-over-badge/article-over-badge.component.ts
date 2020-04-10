import { Component, OnInit,  Input} from '@angular/core';
import {Article} from '../../models'
@Component({
  selector: 'app-article-over-badge',
  templateUrl: './article-over-badge.component.html',
  styleUrls: ['./article-over-badge.component.scss']
})
export class ArticleOverBadgeComponent implements OnInit {
  @Input() collectionNum: any = 0 ;
  @Input() commentNum: any = 0 ;
  @Input() likeNum: any = 0 ;

  constructor() { }

  ngOnInit() {
    console.log(this.commentNum);
    
  }

 
}
