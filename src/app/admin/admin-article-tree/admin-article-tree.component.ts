import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from "@angular/router";
import { ModalComponent} from '../../components/rc-modal/';
import { MessageService} from '../services/MessageService';
import { ArticleCategoryService, TokenStorageService} from '../../servives';
@Component({
  selector: 'admin-article-tree',
  templateUrl: './admin-article-tree.component.html',
  styleUrls: ['./admin-article-tree.component.scss']
})
export class AdminArticleTreeComponent implements OnInit {

  isOpenMenu = false;
  selectedIndex = -1;
  bodyText: string;
  editName = ''
  items = []

  constructor(private modalService: NgbModal, 
    private messageService: MessageService,
    private storageService :TokenStorageService,
    private articleCategoryService:ArticleCategoryService,
    private router: Router) { }

  ngOnInit() {
    let currentUser = this.storageService.getCurrentUser();
    if (currentUser) {
      this.articleCategoryService.getCategoryByOwer(currentUser.username)
      .subscribe(categorys => {
        this.items = categorys
        this.setActive(0);
      });
    }
   
  }

  onOpenConfig(){
    console.log('config');
    this.isOpenMenu = true;
  }

  addCategory(){
    console.log('log');
  }

  setActive(index) {
    this.selectedIndex = index;
    this.messageService.updatedMessage({updateType:'category', data:this.items[index]})
  }

  delete(item) {
    const index = this.items.indexOf(item, 0);
      if (index > -1) {
        this.items.splice(index, 1);
      }
  }

  open(item) {
    const modalRef = this.modalService.open(ModalComponent, {ariaLabelledBy: 'modal-basic-title'});
    modalRef.componentInstance.options = item;
    modalRef.result.then((result) => {
      item = result;
    }, (reason) => {
      console.log(reason);
    });
  }

  goIndex() {
    this.router.navigate(["/"]);
  }
}
