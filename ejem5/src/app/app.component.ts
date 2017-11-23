import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
  
})

export class AppComponent {
  public titulo:string = "Ejemplo 5 Constructor, propiedades y método";
  imgUrl = 'assets/img.png';
  public pelicula:string;
  public director:string;
  public anio:number;
  public todosPublicos:boolean;
  public idiomas: Array<string>;
  public saludo:string;

  constructor(){
  	this.pelicula ="Superman";
  	this.director = "Txomin";
  	this.anio =2017;
  	this.todosPublicos = true;
  	this.idiomas = ["ingles", "español", "frances"];
  	this.saluda();
  }
  saluda(){
  	this.saludo=("hola " + this.pelicula); 
  }
}
