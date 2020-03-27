import { Component, OnInit } from '@angular/core';
import { ArticleService, TokenStorageService} from '../../servives';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-article-viewer',
  templateUrl: './article-viewer.component.html',
  styleUrls: ['./article-viewer.component.scss']
})
export class ArticleViewerComponent implements OnInit {

  markdown_context = '`### Markdown example';
  articleId='';
  constructor(private articleService:ArticleService,
    private storageService:TokenStorageService,
    private actRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe(params => {
      this.articleId = params.get('id');
      this.articleService.getArticle(this.articleId).subscribe(response=>{
        this.markdown_context = response.context;
       })
    });
  
  }

  onReady() {
    console.log('Ready!')
  }

}
