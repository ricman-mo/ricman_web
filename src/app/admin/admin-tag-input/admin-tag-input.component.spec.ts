import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTagInputComponent } from './admin-tag-input.component';

describe('AdminTagInputComponent', () => {
  let component: AdminTagInputComponent;
  let fixture: ComponentFixture<AdminTagInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTagInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTagInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
