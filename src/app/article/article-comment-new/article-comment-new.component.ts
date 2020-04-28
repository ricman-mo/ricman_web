import { Component, OnInit ,Input} from '@angular/core';
import {ArticleDiscuss} from '../../models'
@Component({
  selector: 'app-article-comment',
  templateUrl: './article-comment-new.component.html',
  styleUrls: ['./article-comment-new.component.scss']
})
export class ArticleCommentNewComponent implements OnInit {
  @Input() commentId: string ;
  @Input() comment: ArticleDiscuss ;

  private _loadTime:string ;

  // Alan: Use input property setter
  @Input() set loadTime(value: string) {
    this._loadTime = value;
    this.reload();
  }

  // Alan: Use input property getter
  get loadTime(): string {
    return this._loadTime;
  }

  comment_context ='' ;
  authorHeaderSrc = '';
  authorName= '';
  commentTime = ''
  likeNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  reload () {
    console.log('reload')
  }


}
