import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-comment',
  templateUrl: './article-comment-new.component.html',
  styleUrls: ['./article-comment-new.component.scss']
})
export class ArticleCommentNewComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }
  comment_context = `TMD还无法颠覆BAT，拿我自己来说，我是BAT的用户，无论是工作还是生活对BAT的粘性还是蛮高的，而TMD我就旅游出行时会用用美团，至今依然不是今日头条的用户，而且以后也不会是，至于滴滴也是偶尔会用，在我懒得坐地铁时，使用频率并不高。其实微信对网民的新增用户有一定促进作用，我妈以前从来不用网络也不会用，是微信让她成为网民的，所以BAT还是主力军。`;
  authorHeaderSrc = 'assets/ricman.jpg';
  authorName= "小王";
  commentTime = '2019-12-01'
  likeNumber = 8;

}
