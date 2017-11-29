import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {PeliculasListComponent} from './components/peliculas-list.component';
import {PeliculasFooterComponent} from './components/peliculas-footer.component';

@NgModule({
  declarations: [
    AppComponent, PeliculasListComponent, PeliculasFooterComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
