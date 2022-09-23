import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExemploNgifComponent } from './views/exemplo-ngif/exemplo-ngif.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemploNgifComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
