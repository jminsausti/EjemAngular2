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

}
