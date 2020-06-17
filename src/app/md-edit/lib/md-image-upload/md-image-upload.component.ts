import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'image-upload-modal',
  templateUrl: './md-image-upload.component.html',
  styleUrls: ['./md-image-upload.scss']
})
export class MdImageUploadComponent implements OnInit  {

  @Input() id: string;
  @Input() public options;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    console.log(this.options);
  }

  passBack() {
    this.passEntry.emit(this.options);
    this.activeModal.close(this.options);
  }
}
