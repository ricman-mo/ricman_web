import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleOverBadgeComponent } from './article-over-badge.component';

describe('ArticleOverBadgeComponent', () => {
  let component: ArticleOverBadgeComponent;
  let fixture: ComponentFixture<ArticleOverBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleOverBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleOverBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
