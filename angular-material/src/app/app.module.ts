import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule , MatTableModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatSortModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatToolbarModule,
    MatButtonModule, MatTableModule, MatFormFieldModule, MatInputModule, MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
