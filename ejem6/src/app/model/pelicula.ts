export class Pelicula{
	public id:number;
	public titulo:string;
	public director:string;
	public anio:number;

	constructor (id:number, titulo:string, director:string,anio:number){
		this.id= id;
		this.titulo=titulo;
		this.director=director;
		this.anio=anio;
	}
  
	//Hay una forma rápida de defnir una clase,
	//y es definiendo directamento en los parámetros del constructor la palabra public
	//quedaría así
	//constructor(publi id:number,
	//public titulo:string,
	//public director:string,
	//public anio:number){}
}
