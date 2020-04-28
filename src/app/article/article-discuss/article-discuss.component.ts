import { Component, OnInit,Input  } from '@angular/core';
import {  Router } from '@angular/router';
import { ArticleDiscussService, TokenStorageService} from '../../servives';
import * as _ from 'lodash';
import {ArticleDiscuss} from '../../models'
@Component({
  selector: 'app-article-discuss',
  templateUrl: './article-discuss.component.html',
  styleUrls: ['./article-discuss.component.scss']
})
export class ArticleDiscussComponent implements OnInit {
  @Input() articleId: string ;
  commentText = '';
  oldCommentText = '';
  showSubmitButton = true;
  isLogin = false;
  currentUser:any;
  returnURl =''
  loadTime = '';
  constructor(private articleDiscussService: ArticleDiscussService,
    private storageService :TokenStorageService,
    private router: Router) {}

  ngOnInit() {
    this.returnURl = this.router.routerState.snapshot.url;
    this.currentUser = this.storageService.getCurrentUser();
    if(this.currentUser) {
      this.isLogin = true;
    }
    this.articleDiscussService.getByArticleId(this.articleId).subscribe(data=>{
      console.log(data);
    });
  }

  valuechange(newValue) {
    if(!_.isEqual(newValue, this.oldCommentText )){
      if(!this.isLogin) {
        this.showSubmitButton = true;
      } else {
        this.showSubmitButton = false;
      }
    } else {
      this.showSubmitButton = true;
    }
  }

  onSave() {
    this.oldCommentText = this.commentText ;
    let comment = new ArticleDiscuss();
    comment.context = this.commentText;
    comment.authorName =  this.currentUser.username;
    comment.articleId = this.articleId;
    comment.parentId = '';
    this.articleDiscussService.addDisscuss(comment).subscribe(response =>{
      this.loadTime = new Date().toUTCString();
    })
  }

  onLogin() {
    this.router.navigate(['/login'], { queryParams: { returnUrl: this.returnURl } });
  }
  onRegister () {
    this.router.navigate(['/register'], { queryParams: { returnUrl: this.returnURl } });
  }

}
