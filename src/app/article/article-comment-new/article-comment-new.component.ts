import { Component, OnInit ,Input} from '@angular/core';
import * as moment from 'moment'; 
import * as _ from 'lodash';
import {ArticleDiscuss} from '../../models'
import {UploadFileService, ArticleDiscussService,UserService, TokenStorageService} from '../../servives'
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

  authorHeaderdata = '';
  authorName= '';
  commentTime = ''
  likeCount = 0;
  unlikeCount = 0;
  currentName='';

  constructor( private userService: UserService,
    private uploadService: UploadFileService,
    private articleDiscussService: ArticleDiscussService,
    private storageService :TokenStorageService) { }

  ngOnInit() {
    this.currentName = this.storageService.getCurrentUser().username;
    if (this.comment) {
      let uesrname = this.comment.authorName;
      this.initComment();
      this.userService.getUser(uesrname).subscribe(userInfo=>{
        this.authorName =  userInfo.displayName;
        if(userInfo.userHeaderName) {
          this.loadUserImage(userInfo.userHeaderName);
        }
      })
    }
  }

  initComment() {
    this.commentTime = moment(this.comment.postedTime).format('YYYY-MM-DD HH:mm');
    this.likeCount = _.toNumber(this.comment.likeCount)
    this.unlikeCount = _.toNumber(this.comment.unlikeCount)
  }

  loadUserImage(imageName) {
    this.uploadService.getImageFile(imageName).subscribe(data=>{
      this.authorHeaderdata ='data:image/png;base64,' + data.picByte;
    })
  }

  reload () {
    console.log('reload')
  }

  like() {
    if (this.currentName) {
      let likeAuthors = _.get(this.comment,'likeAuthors') || [];
      let exist = _.find(likeAuthors, item=> {
        return item ===this.currentName;
      });
      if (exist) {
        return 
      }
      this.likeCount ++;
      likeAuthors.push(this.currentName)
      let data = {
        likeCount: this.likeCount.toString(),
        likeAuthors: likeAuthors
      };
      this.articleDiscussService.UpdateDisscuss(data,this.comment.id).subscribe(res=>{
        this.comment = res.body;
        this.initComment();
      });
    }

  }

  unlike(){
    if (this.currentName) {
      let unlikeAuthors = _.get(this.comment,'unlikeAuthors') || [];
      let exist = _.find(unlikeAuthors, item=> {
        return item ===this.currentName;
      });
      if (exist) {
        return 
      }
      this.unlikeCount ++;
      unlikeAuthors.push(this.currentName)
      let data = {
        unlikeCount: this.unlikeCount.toString(),
        unlikeAuthors: unlikeAuthors
      };
      this.articleDiscussService.UpdateDisscuss(data,this.comment.id).subscribe(res=>{
        this.comment = res.body;
        this.initComment();
      });
    }
  }


}
