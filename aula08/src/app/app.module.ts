import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExemplosNgSwitchComponent } from './views/exemplos-ng-switch/exemplos-ng-switch.component';
import { Ex01NgSwitchComponent } from './views/ex01-ng-switch/ex01-ng-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosNgSwitchComponent,
    Ex01NgSwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
