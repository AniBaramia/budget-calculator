import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
