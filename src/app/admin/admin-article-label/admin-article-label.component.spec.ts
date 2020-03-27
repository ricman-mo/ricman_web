import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArticleLabelComponent } from './admin-article-label.component';

describe('AdminArticleLabelComponent', () => {
  let component: AdminArticleLabelComponent;
  let fixture: ComponentFixture<AdminArticleLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminArticleLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminArticleLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
