import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  	<h1>{{titulo}}</h1> 
  	
  	<p><strong>Películas</strong></p>
  	<ul>
  		<li>Título: {{pelicula}}</li>
  		<li>Director: {{director}}</li>
  		<li>Año: {{anio}}</li>
      <li>Todos Públicos: {{todosPublicos}}</li>
      <li>Idiomas: {{idiomas}}</li>
  	</ul>
  

  `,
})
export class AppComponent {
  public titulo:string = "Ejemplo 3 Tipos de datos typescript";
  public pelicula:string ="Superman";
  public director:string = "Txomin";
  public anio:number =2017;
  public todosPublicos:boolean = true;
  public idiomas: Array<string> = ["ingles", "español", "frances"];
}
