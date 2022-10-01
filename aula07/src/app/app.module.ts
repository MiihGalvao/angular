import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExemploNgifComponent } from './views/exemplo-ngif/exemplo-ngif.component';
import { Ex01NgifComponent } from './views/ex01-ngif/ex01-ngif.component';
import { Ex02NgifComponent } from './views/ex02-ngif/ex02-ngif.component';
import { Ex03NgifComponent } from './views/ex03-ngif/ex03-ngif.component';
import { ExemploNgforComponent } from './views/exemplo-ngfor/exemplo-ngfor.component';
import { Ex01NgForComponent } from './views/ex01-ng-for/ex01-ng-for.component';
import { Ex02NgForComponent } from './views/ex02-ng-for/ex02-ng-for.component';
import { Ex06NgForComponent } from './views/ex06-ng-for/ex06-ng-for.component';
import { Ex07NgForComponent } from './views/ex07-ng-for/ex07-ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemploNgifComponent,
    Ex01NgifComponent,
    Ex02NgifComponent,
    Ex03NgifComponent,
    ExemploNgforComponent,
    Ex01NgForComponent,
    Ex02NgForComponent,
    Ex06NgForComponent,
    Ex07NgForComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
