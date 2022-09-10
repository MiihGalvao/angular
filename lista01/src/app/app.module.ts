import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ex01Component } from './views/ex01/ex01.component';
import { Ex02Component } from './views/ex02/ex02.component';
import { Ex03Component } from './views/ex03/ex03.component';
import { Ex04Component } from './views/ex04/ex04.component';
import { Ex05Component } from './views/ex05/ex05.component';
import { Ex06Component } from './views/ex06/ex06.component';
import { Ex07Component } from './views/ex07/ex07.component';
import { Ex08Component } from './views/ex08/ex08.component';
import { Ex09Component } from './views/ex09/ex09.component';
import { Ex10Component } from './views/ex10/ex10.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex01Component,
    Ex02Component,
    Ex03Component,
    Ex04Component,
    Ex05Component,
    Ex06Component,
    Ex07Component,
    Ex08Component,
    Ex09Component,
    Ex10Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
