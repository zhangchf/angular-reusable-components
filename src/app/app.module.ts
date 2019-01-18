import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { StarComponent } from './star/star.component';
import { MovieTitleCasePipe } from './movie-titlecase.pipe';
import { LikesComponent } from './likes/likes.component';
import { TweetComponent } from './tweet/tweet.component';
import { ZippyComponent } from './zippy/zippy.component';
import { FormCreateCourseComponent } from './form-create-course/form-create-course.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    MovieTitleCasePipe,
    LikesComponent,
    TweetComponent,
    ZippyComponent,
    FormCreateCourseComponent,
    ChangePasswordFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
