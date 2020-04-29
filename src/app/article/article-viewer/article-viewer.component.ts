import { Component, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ArticleService, TokenStorageService} from '../../servives';
import { ActivatedRoute } from '@angular/router';
import {Article} from '../../models'
@Component({
  selector: 'app-article-viewer',
  templateUrl: './article-viewer.component.html',
  styleUrls: ['./article-viewer.component.scss']
})
export class ArticleViewerComponent implements OnInit {

  current_article:Article = new Article();
  articleId='';
  constructor(private articleService:ArticleService,
    private storageService:TokenStorageService,
    private activateRoute: ActivatedRoute,
    private markdownService: MarkdownService
    ) { 
      
    }

  ngOnInit() {
    this.activateRoute.paramMap.pipe(
      switchMap(params => {
        this.articleId = params.get('id');
        return this.articleService.getArticle(params.get('id'));
      })
    ).subscribe(data=>{
      this.current_article = data;
      this.current_article.commentCount = '0';
      this.current_article.likeCount = '0';
      this.current_article.collectionCount = '0';
      this.articleId = this.current_article.id;
    });

    this.markdownService.renderer.image = (href, title,text)=>{
      const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
      return `<image src="${href}" width="150px" height="150px" alt="${escapedText}" >`
    }
  
  }

  onReady() {
    console.log('Ready!')
  }

}
