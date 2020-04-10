import { Component, OnInit } from '@angular/core';
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
    private activateRoute: ActivatedRoute
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
  
  }

  onReady() {
    console.log('Ready!')
  }

}
