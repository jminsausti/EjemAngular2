import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	public ciudad:string = 'Bilbao';
	public provincia:string = 'Bizkaia';

	showPueblo (event):void{
		alert(event.nombre);
	}
}
