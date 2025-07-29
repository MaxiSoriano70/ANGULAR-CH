import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Student } from './shared/entities';
/* SERVICIOS
SE CREAN EN EL COMPONENTE DONDE SE VAN A UTILIZAR
SI EL GLOBAL VA EN SHARED/SERVICIOS
*/

@Injectable({
  providedIn: 'root'
})

export class AlumnosService {
  private onDestroys$ = new Subject<void>();
  private nombre = "pepe"

  constructor(private http: HttpClient) { }

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

  getAlumnosObs(): Observable<Student[]>{
    return this.http.get<Student[]>('assets/mocks/students.json').pipe(
      takeUntil(this.onDestroys$)
    )
  }

  getObs() {
    const observable = new Observable<number>((observer) => {
      observer.next(1);
      observer.next(2);
      observer.complete();
    });
    return observable;
  }

}
