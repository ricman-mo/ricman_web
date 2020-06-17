import { Component, OnInit } from '@angular/core';
import { MessageService} from '../services';
import { ArticleService, TokenStorageService} from '../../servives';
import { MarkdownService } from 'ngx-markdown';
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
  private options = {
    showPreviewPanel: false,
    enablePreviewContentClick: false,
    resizable: true,
    customRender: {
      image: function (href: string, title: string, text: string) {
        let out = `<img style="max-width:100%;border:1px solid #808080;" src="${href}" alt="${text}"`;
        if (title) {
          out += ` title="${title}"`;
        }
        out += (<any>this.options).xhtml ? "/>" : ">";
        return out;
      }
    }
  };

  constructor(private messageService: MessageService,
    private articleService:ArticleService,
    private storageService:TokenStorageService,
    private markdownService: MarkdownService) {
      this.doUpload = this.doUpload.bind(this);  // This is very important.
     }

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
  doUpload(files: Array<File>) {
    // do upload file by yourself
    for (let file of files) {
      console.log(file.name);
    }
    console.log('OK');
  }

}
