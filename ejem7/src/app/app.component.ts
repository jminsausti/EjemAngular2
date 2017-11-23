import { Component } from '@angular/core';
import {Pelicula} from "./model/pelicula";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ["../assets/css/styles.css"]
  
})

export class AppComponent {
  public titulo:string = "Ejemplo 7 CSS en fichero externo";
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
