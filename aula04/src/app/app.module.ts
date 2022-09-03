import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExEventoComponent } from './views/ex-evento/ex-evento.component';
import { Ex05Component } from './views/ex05/ex05.component';
import { Ex06Component } from './views/ex06/ex06.component';
import { Ex07Component } from './views/ex07/ex07.component';

@NgModule({
  declarations: [
    AppComponent,
    ExEventoComponent,
    Ex05Component,
    Ex06Component,
    Ex07Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
