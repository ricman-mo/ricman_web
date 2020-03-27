import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcModalComponent } from './rc-modal.component';

describe('RcModalComponent', () => {
  let component: RcModalComponent;
  let fixture: ComponentFixture<RcModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RcModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
