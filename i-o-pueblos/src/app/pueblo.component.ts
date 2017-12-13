import { Component, Input} from '@angular/core';
 
@Component({
  selector: 'pueblo',
  template: `
    <hr/>
    <h3>{{nombre}}</h3>
    <p>Ciudad: {{ciudad}}</p>
    <p>Provincia: {{miProvincia}}</p>
    
`
})
export class PuebloComponent {
// Guardamos los datos que nos pasa el componente padre
  @Input() ciudad: string;
  @Input('provincia') miProvincia: string;
  
  public nombre:string;
 
  constructor(){
    this.nombre = "Pueblo de Bizkaia";   
  }
}