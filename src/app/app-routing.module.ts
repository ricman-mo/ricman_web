import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { AppHeaderComponent } from './_layout/app-header/app-header.component';
import { AppFooterComponent } from './_layout/app-footer/app-footer.component';
import { HomeComponent } from './home/home.component';
import { MarkdownViewerComponent } from './markdown-viewer/markdown-viewer.component';
import { ArticleViewerComponent } from './article/article-viewer/article-viewer.component';
import { ScrollMessageComponent } from './components/scroll-message/scroll-message.component';
import { AuthGuard } from './utility';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminEntryComponent, AdminArticleTreeComponent ,AdminArticleLabelComponent} from './admin';
import { UserProfileComponent } from './user/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: AppLayoutComponent ,
  children: [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'view', component: MarkdownViewerComponent},
    { path: 'article/:id', component: ArticleViewerComponent},
  ]},
  { path: 'admin_ricman', component: AdminEntryComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'userprofile', component: UserProfileComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
