import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArticleTreeComponent } from './admin-article-tree.component';

describe('AdminArticleTreeComponent', () => {
  let component: AdminArticleTreeComponent;
  let fixture: ComponentFixture<AdminArticleTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminArticleTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminArticleTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
