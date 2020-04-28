import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UploadFileService, TokenStorageService} from '../../servives'

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})
export class UploadFilesComponent implements OnInit {

  @Input() purpose:string;
  @Input() sourceId:string;
  @Output() onloaded = new EventEmitter();
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;

  constructor(private uploadService: UploadFileService,
     private storageService: TokenStorageService) { }

  ngOnInit() {
    
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress = 0;
    let currentUser = this.storageService.getCurrentUser();
    let ower =  currentUser.username;
    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(this.currentFile,[ower, this.purpose, this.sourceId ]).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          let fileinfo = event.body;
          this.onloaded.emit(fileinfo);
          this.currentFile = undefined;
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }

}
