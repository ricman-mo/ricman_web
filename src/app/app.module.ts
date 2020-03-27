import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxTagsInputModule } from 'ngx-tags-input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { AppHeaderComponent } from './_layout/app-header/app-header.component';
import { AppFooterComponent } from './_layout/app-footer/app-footer.component';
import { HomeComponent } from './home/home.component';
import { MarkdownViewerComponent } from './markdown-viewer/markdown-viewer.component';
import { MarkdownModule } from 'ngx-markdown';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { ArticleViewerComponent } from './article/article-viewer/article-viewer.component';
import { ArticleEditComponent } from './article/article-edit/article-edit.component';
import { ArticleDiscussComponent } from './article/article-discuss/article-discuss.component';
import { ArticleCommentHotComponent } from './article/article-comment-hot/article-comment-hot.component';
import { ArticleCommentNewComponent } from './article/article-comment-new/article-comment-new.component';
import { ArticleOverBadgeComponent } from './article/article-over-badge/article-over-badge.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MainCarouselComponent } from './components/main-carousel/main-carousel.component';
import { ArticleItemViewerComponent } from './article/article-item-viewer/article-item-viewer.component';
import { ScrollMessageComponent } from './components/scroll-message/scroll-message.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ArticleItemAuthorComponent } from './article/article-item-author/article-item-author.component';
import {APIInterceptor,ErrorInterceptor, BasicAuthInterceptor} from './utility';
import { AdminEntryComponent, AdminArticleTreeComponent ,AdminArticleLabelComponent} from './admin';
import { ModalComponent} from './components/rc-modal/';
import { AdminArticleListByCategoryComponent } from './admin/admin-article-list-by-category/admin-article-list-by-category.component';
import { AdminArticleEditComponent } from './admin/admin-article-edit/admin-article-edit.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppLayoutComponent,
    AppComponent,
    HomeComponent,
    MarkdownViewerComponent,
    ArticleViewerComponent,
    ArticleEditComponent,
    ArticleDiscussComponent,
    ArticleCommentHotComponent,
    ArticleCommentNewComponent,
    ArticleOverBadgeComponent,
    MainCarouselComponent,
    ArticleItemViewerComponent,
    ScrollMessageComponent,
    LoginComponent,
    RegisterComponent,
    ArticleItemAuthorComponent,
    AdminEntryComponent,
    AdminArticleTreeComponent,
    AdminArticleLabelComponent,
    ModalComponent,
    AdminArticleListByCategoryComponent,
    AdminArticleEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MarkdownModule.forRoot({loader: HttpClient}),
    LMarkdownEditorModule,
    NgbModule,
    NgxTagsInputModule,
    CommonModule,
    BrowserModule 
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ ModalComponent ]
})
export class AppModule { }
