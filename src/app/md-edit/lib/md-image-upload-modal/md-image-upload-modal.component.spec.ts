import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdImageUploadModalComponent } from './md-image-upload-modal.component';

describe('MdImageUploadModalComponent', () => {
  let component: MdImageUploadModalComponent;
  let fixture: ComponentFixture<MdImageUploadModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdImageUploadModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdImageUploadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
