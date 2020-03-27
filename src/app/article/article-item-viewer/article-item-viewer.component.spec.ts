import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleItemViewerComponent } from './article-item-viewer.component';

describe('ArticleItemViewerComponent', () => {
  let component: ArticleItemViewerComponent;
  let fixture: ComponentFixture<ArticleItemViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleItemViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleItemViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
