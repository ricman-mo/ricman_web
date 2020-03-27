import { Component, OnInit } from '@angular/core';
import { MessageService} from '../services';
import { ArticleService, TokenStorageService} from '../../servives';
import {Article} from '../../models'
@Component({
  selector: 'admin-article-edit',
  templateUrl: './admin-article-edit.component.html',
  styleUrls: ['./admin-article-edit.component.scss']
})
export class AdminArticleEditComponent implements OnInit {

  articleTitle= 'datekkk'
  markdowndata = '';
  categoryId = '';
  constructor(private messageService: MessageService,
    private articleService:ArticleService,
    private storageService:TokenStorageService) { }

  ngOnInit() {
    this.messageService.currentMessage.subscribe(message=>{
      console.log(message);
      if (message.updateType === 'article') {
        this.articleTitle = message.data.title;  
        this.categoryId = message.selectId;
        this.markdowndata =message.data.context ? message.data.context:'';
      }
    })
  }

  onSave() {
    let currentUser = this.storageService.getCurrentUser();
    let data = new Article();
    data.title =this.articleTitle;
    data.context = this.markdowndata;
    data.authorName = currentUser.username;
    data.categoryId = this.categoryId;
    this.articleService.addArticle(data).subscribe(response =>{
      console.log('OK');
    })
  }

}
