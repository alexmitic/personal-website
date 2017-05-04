import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { FirstRowComponent } from './first-row/first-row.component';
import { MyLinksRowComponent } from './my-links-row/my-links-row.component';
import { FactsRowComponent } from './facts-row/facts-row.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstRowComponent,
    MyLinksRowComponent,
    FactsRowComponent
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
