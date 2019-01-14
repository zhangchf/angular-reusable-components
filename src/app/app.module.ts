import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { StarComponent } from './star/star.component';
import { MovieTitleCasePipe } from './movie-titlecase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    MovieTitleCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
