import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'article-item-viewer',
  templateUrl: './article-item-viewer.component.html',
  styleUrls: ['./article-item-viewer.component.scss']
})
export class ArticleItemViewerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  imgSrc = 'assets/Desert.jpg';
  articleTitle = 'test article'
  articleOverView = '每天我们都能看到关于美国的大大小小的新闻，那些浮于新闻报道的信息，到底意味着什么？贸易、制裁、禁令、利率......它们因何而生？因何而变？又将指向何处？'

}
