import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCommentNewComponent } from './article-comment-new.component';

describe('ArticleCommentNewComponent', () => {
  let component: ArticleCommentNewComponent;
  let fixture: ComponentFixture<ArticleCommentNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleCommentNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCommentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
