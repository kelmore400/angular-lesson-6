import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ListService } from './list.service';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NumbersService } from './numbers.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ListService, NumbersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
