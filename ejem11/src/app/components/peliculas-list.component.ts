import {Component} from '@angular/core';
import {Pelicula} from "../model/pelicula";

@Component({
  selector: 'peliculas-list',
  templateUrl: 'peliculas-list.html'  
})

export class PeliculasListComponent {
  public cabecera:string = "CABECERA";
  public pelicula: Pelicula;
  public mostrarDatos:boolean;
  public valor:string;
  
  //Si defino un array para guardar objetos puedo optar por:
  //1. no definir el tipo de datos
  //public peliculas;
  
  //2. indicar que es de tipo any
  //public peliculas: Array<any>;

  //3. indicar el tipo de dato de cada uno de los elementos del array
  //public peliculas: {id:number, titulo:string, director:string, anio:number}[];
  
  //4. indicar que el array es de tipo objeto
  public peliculas:Array<Pelicula>;  


  constructor(){
    this.mostrarDatos=false;
    this.pelicula = new Pelicula (1, "Superman", "Txomin", 2017);
    this.peliculas =[
      new Pelicula (2, "Spiderma", "Juantxu", null),
      new Pelicula (3, "Batman", "Maritxu", 2015),
      new Pelicula (4, "Càpitan Araña", "Iker", null),
      new Pelicula (5, "Superwoman", "Ane", 2013),
      ];

    this.debugg();
  }
  
  debugg(){
    console.log(this.cabecera);
  }

  mostrarOcultar(valor){
    this.mostrarDatos = valor;
    console.log(this.mostrarDatos);
  }
	
}
