import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDiscussComponent } from './article-discuss.component';

describe('ArticleDiscussComponent', () => {
  let component: ArticleDiscussComponent;
  let fixture: ComponentFixture<ArticleDiscussComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleDiscussComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDiscussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
