import { Component, OnInit } from '@angular/core';
import { MessageService} from '../services';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { ArticleService, TokenStorageService, UploadFileService} from '../../servives';
import { MarkdownService } from 'ngx-markdown';
import {Article} from '../../models'
@Component({
  selector: 'admin-article-edit',
  templateUrl: './admin-article-edit.component.html',
  styleUrls: ['./admin-article-edit.component.scss']
})
export class AdminArticleEditComponent implements OnInit {

  articleTitle:string; 
  markdowndata = '';
  categoryId = '';
  currentArticle: any;
  description:string;
  selectMode: boolean = false;
  defaultImage:any;
  currentUser:any;
  articleImage:any = [];
  private options = {
    showPreviewPanel: false,
    enablePreviewContentClick: false,
    resizable: true,
    customRender: {
      image: this.imageRender.bind(this)
    }
  };

  constructor(private messageService: MessageService,
    private articleService:ArticleService,
    private storageService:TokenStorageService,
    private markdownService: MarkdownService,
    private uploadService: UploadFileService) {
      this.doUpload = this.doUpload.bind(this);  // This is very important.
  }

  imageRender(href: string, title: string, text: string) {
    this.articleImage.push(href);
    if ( this.articleImage.length > 0 && ! this.defaultImage ) {
      this.defaultImage = this.articleImage[0];
    }
    let out = `<img style="max-width:100%;border:1px solid #808080;" src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += (<any>this.options).xhtml ? "/>" : ">";
    return out;
  }

  ngOnInit() {
    this.currentUser = this.storageService.getCurrentUser();
    this.messageService.currentMessage.subscribe(message=>{
      console.log(message);
      if (message.updateType === 'article') {
        this.articleImage = [];
        this.defaultImage = message.data.coverImage;
        this.selectMode = (message.data.selectMode === 'true');
        this.currentArticle = message.data;
        this.articleTitle = message.data.title;  
        this.categoryId = message.selectId;
        this.markdowndata =message.data.context ? message.data.context:'';
        this.description = message.data.description;
      }
    })
  }

  onSave() {
    if (this.currentArticle && this.currentArticle.id) {
      this.onEdit();
    } else {
 
      let data = new Article();
      data.title =this.articleTitle;
      data.context = this.markdowndata;
      data.authorName =  this.currentUser.username;
      data.categoryId = this.categoryId;
      data.description  = this.description;
      data.coverImage = this.defaultImage;
      data.coverMode   = this.selectMode;
      this.articleService.addArticle(data).subscribe(response =>{
        console.log('OK');
      })
    }
    
  }

  onEdit() {
    if (this.currentArticle && this.currentArticle.id) {
      var updateData = {
        title:  this.articleTitle,
        context: this.markdowndata,
        description  : this.description,
        coverImage: this.defaultImage,
        coverMode: this.selectMode
      }
      this.articleService.updateArticle(updateData,this.currentArticle.id).subscribe(res=>{
        console.log('OK');
      })
    }
  }
  doUpload(files: Array<File>) {
    // do upload file by yourself
    for (let file of files) {
      console.log(file.name);
    }
    console.log('OK');
  }

  changeMode() {

  }

  processFile(event) {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      var reader = new FileReader();
   
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any ) => { // called once readAsDataURL is completed
        this.defaultImage = event.target.result; 
        this.uploadImage(file);
      }
    }
  }

  uploadImage(file) {
    let username = this.currentUser.username;
    let sourceId = this.currentArticle ?  this.currentArticle.id : '';
    this.uploadService.upload(file,[ username, 'cover', sourceId ]).subscribe(
      event => {
        if (event instanceof HttpResponse) {
          let fileinfo = event.body;
          this.defaultImage = fileinfo.url;
        }
      },
      err => {
        this.defaultImage  = null;
      });
  }

}
