import { AppErrorHandler } from './services/AppErrorHandler';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StarComponent } from './star/star.component';
import { MovieTitleCasePipe } from './movie-titlecase.pipe';
import { LikesComponent } from './likes/likes.component';
import { TweetComponent } from './tweet/tweet.component';
import { ZippyComponent } from './zippy/zippy.component';
import { FormCreateCourseComponent } from './form-create-course/form-create-course.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';

@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    MovieTitleCasePipe,
    LikesComponent,
    TweetComponent,
    ZippyComponent,
    FormCreateCourseComponent,
    ChangePasswordFormComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
