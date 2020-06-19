import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import {UploadFileService, TokenStorageService,UserService} from '../../../servives'
import {ImageSnippet} from '../../../models/';
import { from } from 'rxjs';
@Component({
  selector: 'app-md-image-upload-modal',
  templateUrl: './md-image-upload-modal.component.html',
  styleUrls: ['./md-image-upload-modal.component.scss']
})
export class MdImageUploadModalComponent implements OnInit {


  @Input() id: string;
  @Input() public options;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  constructor(  public activeModal: NgbActiveModal,
    private imageService: UploadFileService,
    private tokenStorageService:TokenStorageService) { }
  selectedFile: ImageSnippet;
  username: any;
  purpose:any ='article'
  sourceId: any = 'upload';
  fileName: String ="请选择文件"
  imageSrc: any;
  ngOnInit() {
    let currentUser = this.tokenStorageService.getCurrentUser();
    if (currentUser) {
      this.username = currentUser.username;
    }
   
  }
  onBack() {
    this.passEntry.emit(this.selectedFile);
    this.activeModal.close(this.selectedFile);
  }

  onCancel () {
    this.activeModal.close({});
  }

  private onSuccess(fileinfo) {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
    this.selectedFile.backendName = fileinfo.name;
    this.selectedFile.backendUrl = fileinfo.url;
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  processFile(events: any) {
   if(events.target.files && events.target.files[0]) {
    const file: File = events.target.files[0];
    const reader = new FileReader();
    this.fileName = file.name;
    reader.addEventListener('load', (event: any) => {
      this.imageSrc = event.target.result;
      this.selectedFile = new ImageSnippet(this.imageSrc, file);

      this.selectedFile.pending = true;

      this.imageService.upload(file,[this.username, this.purpose, this.sourceId]).subscribe(
        res => {
          if (res.type === HttpEventType.UploadProgress) {
            this.selectedFile.pending = true;
          } else if (res instanceof HttpResponse) {
            let fileinfo = res.body;
            this.onSuccess(fileinfo);
          }
        },
        (err) => {
          this.onError()
        })
    });

    reader.readAsDataURL(file);
   }
    
  }

}
