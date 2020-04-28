import { Component, OnInit ,Input} from '@angular/core';
import { ArticleDiscussService, TokenStorageService} from '../../servives';
@Component({
  selector: 'article-comment-list',
  templateUrl: './article-comment-list.component.html',
  styleUrls: ['./article-comment-list.component.scss']
})
export class ArticleCommentListComponent implements OnInit {
  private _articleId: string ;
  @Input() set articleId(value: string) {
    this._articleId = value;
    this.reload();
  }
 
  hotComments:any = [];
  allcomments:any = [];
  constructor(private articleDiscussService: ArticleDiscussService) { }

  ngOnInit() {
  }
  reload() {

    this.articleDiscussService.getByArticleId(this._articleId).subscribe(response => {
      this.allcomments = response;
    });
  }

}
