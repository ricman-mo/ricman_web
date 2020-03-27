import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { MessageService} from '../services/MessageService';
import { ArticleService, TokenStorageService} from '../../servives';
@Component({
  selector: 'admin-article-list-by-category',
  templateUrl: './admin-article-list-by-category.component.html',
  styleUrls: ['./admin-article-list-by-category.component.scss']
})
export class AdminArticleListByCategoryComponent implements OnInit {
  datas =[]
  selectedIndex = -1;
  selectCategoryId='';
  constructor(private messageService: MessageService, 
    private articleService:ArticleService) { }

  ngOnInit() {
    this.messageService.currentMessage.subscribe(data=>{
      console.log(data);
      if (data.updateType === 'category') {
        //todo
        this.updateArticleList(data.data);
      }
    })
  }

  updateArticleList(selectCategory){
    console.log(selectCategory);
    this.selectCategoryId = selectCategory.id;
    this.articleService.getArticleByCategory(selectCategory.id).subscribe(response=>{
      this.datas = response;
      if (this.datas.length >0) {
 
      } else {
        this.datas.push({
          title:new Date().toISOString().split('T')[0],
        });
      }
      this.selectItem(this.datas[0],0);
    })
  }

  selectItem(item, i){
    this.selectedIndex = i;
    console.log(item.name);
    this.messageService.updatedMessage({
      updateType:'article',
      data:this.datas[i],
      selectId:this.selectCategoryId
    })
  }


  addNew() {
    this.datas.unshift({
      title: new Date().toISOString().split('T')[0]
    })
  }

}
