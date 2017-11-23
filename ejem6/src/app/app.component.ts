import { Component } from '@angular/core';
import {Pelicula} from "./model/pelicula";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
  
})

export class AppComponent {
  public titulo:string = "Ejemplo 5 Constructor, propiedades y método";
  imgUrl = 'assets/img.png';
  public pelicula: Pelicula;

  constructor(){
    this.pelicula = new Pelicula (1, "Superman", "Txomin", 2017);
    this.debug();
  }
  debug(){
    console.log(this.pelicula);
  }
}
