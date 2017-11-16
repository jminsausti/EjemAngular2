import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
  
})

export class AppComponent {
  public titulo:string = "Ejemplo 4 Template en documento independiente";
  public pelicula:string ="Superman";
  public director:string = "Txomin";
  public anio:number =2017;
  public todosPublicos:boolean = true;
  public idiomas: Array<string> = ["ingles", "español", "frances"];
}
