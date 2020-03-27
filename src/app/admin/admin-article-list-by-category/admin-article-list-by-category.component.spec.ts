import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArticleListByCategoryComponent } from './admin-article-list-by-category.component';

describe('AdminArticleListByCategoryComponent', () => {
  let component: AdminArticleListByCategoryComponent;
  let fixture: ComponentFixture<AdminArticleListByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminArticleListByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminArticleListByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
