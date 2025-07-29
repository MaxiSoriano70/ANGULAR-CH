import { Injectable } from '@angular/core';
/* SERVICIOS
SE CREAN EN EL COMPONENTE DONDE SE VAN A UTILIZAR
SI EL GLOBAL VA EN SHARED/SERVICIOS
*/

@Injectable({
  providedIn: 'root'
})

export class AlumnosServiceService {
  private nombre = "pepe"

  constructor() { }

  /* Por defecto en un servicio los metodos son PUBLIC*/
  private getAlumnos(){
    return[
      { id: 1, nombre: 'Juan', apellido: 'Perez'},
      { id: 2, nombre: 'Ana', apellido: 'Gomez'},
      { id: 3, nombre: 'Luis', apellido: 'Martinez'}
    ]
  }

  getAlumnosSinId(){
    return this.getAlumnos().map(({id, ...rest}) => rest);
  }

  getNombre(){
    return this.nombre;
  }
}
