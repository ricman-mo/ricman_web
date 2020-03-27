import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollMessageComponent } from './scroll-message.component';

describe('ScrollMessageComponent', () => {
  let component: ScrollMessageComponent;
  let fixture: ComponentFixture<ScrollMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
