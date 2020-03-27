import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCommentHotComponent } from './article-comment-hot.component';

describe('ArticleCommentHotComponent', () => {
  let component: ArticleCommentHotComponent;
  let fixture: ComponentFixture<ArticleCommentHotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleCommentHotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCommentHotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
