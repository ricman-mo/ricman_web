import { Component, OnInit, Input } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import {UploadFileService, TokenStorageService,UserService} from '../../servives'
import { User } from 'src/app/models';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private uploadService: UploadFileService,
     private storageService :TokenStorageService,
     private userService: UserService) { }
  isLogin = false;
  changeImage:any;
  username = ''
  purpose = 'userProfile';
  sourceId = 'userId'
  imagedata; //默认图片
  oldImage;//保存原始图片
  defaultheader = '5ea695a0deb24f287a0bd5b3';
  userHeader = '';
  userInfo:User;
  selectedFiles:FileList;
  message = '';
  displayName = ''
  gender = 0;
  description = '';
  ngOnInit() {
    let currentUser = this.storageService.getCurrentUser();
    if (currentUser) {
      this.username = currentUser.username;
      this.isLogin = true;
      this.userService.getUser(this.username).subscribe(data=>{
        this.userInfo = data;
        this.sourceId = this.userInfo.id;
        this.displayName = this.userInfo.displayName;
        this.gender = parseInt(this.userInfo.gender,10);
        this.description = this.userInfo.description;
        if(this.userInfo.userHeaderName) {
          this.loadDefaultUserImage(this.userInfo.userHeaderName);
        } else {
          this.loadDefaultUserImage(this.defaultheader );
        }
      })
    } else {
      this.isLogin = false;
    }
  }

  loadDefaultUserImage(imageName) {
    this.uploadService.getImageFile(imageName).subscribe(data=>{
      this.imagedata ='data:image/png;base64,' + data.picByte;
      this.oldImage =  'data:image/png;base64,' + data.picByte;
      this.userHeader = data.name;
    })
  }

  loadnewImage(info) {
    console.log('load');
    let imageName = info.name;
    this.loadDefaultUserImage(imageName);
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.imagedata = reader.result;
        this.changeImage = true;
      }
      this.selectedFiles = event.target.files;
    }
  }
  public delete(){
    this.changeImage = false;
    this.imagedata = this.oldImage;
  }
  public uploadImage() {
    let currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(currentFile,[ this.username, this.purpose, this.sourceId ]).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.message ="头像上传中"
        } else if (event instanceof HttpResponse) {
          let fileinfo = event.body;
          //this.loadnewImage(fileinfo);
          this.message ="头像上传完成"
        }
      },
      err => {
        this.message = '上传头像失败';
      });

    this.selectedFiles = undefined;

  }

  onSave() {
    this.userService.updateUser(this.sourceId, this.displayName,this.gender,
     this.description, this.defaultheader).subscribe(res=>{
       console.log(res);
     })
  }

}
