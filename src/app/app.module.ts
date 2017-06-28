import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { CenterPartComponent } from './center-part/center-part.component';
import { QuicksortComponent } from './quicksort/quicksort.component';
import { LearningComponent } from './learning/learning.component';

@NgModule({
  declarations: [
    AppComponent,
    CenterPartComponent,
    QuicksortComponent,
    LearningComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
