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
  	</ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo = "Ejemplo 2 Binding";
  pelicula ="Superman";
  director = "Txomin";
  anio =2017;

}
