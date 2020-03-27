import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleItemAuthorComponent } from './article-item-author.component';

describe('ArticleItemAuthorComponent', () => {
  let component: ArticleItemAuthorComponent;
  let fixture: ComponentFixture<ArticleItemAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleItemAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleItemAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
