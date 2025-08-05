import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Student } from '../shared/entities';
import { AlumnosService } from '../alumnos-service.service';
import { PerfilUsuarioComponent } from '../perfil-usuario/perfil-usuario.component';
import { HijoComponent } from '../hijo/hijo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule, PerfilUsuarioComponent, HijoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, OnInit{
  form: FormGroup;

  @ViewChild("btnMain") btnMain!:ElementRef<HTMLButtonElement>;

  estudiantes : any;
  estudiantesObs! : Observable<Student[]>;

  name : string = "celeste";
  edad = 27;
  isDisabled = false;
  loading = true;
  namesArray = ["Celeste", "Melissa", "Tati"];
  myDate = new Date();

  /* LOS SERVICIOS SIEMPRE SE DACLARAN EN EL CONSTRUCTOR */
  constructor(private fb: FormBuilder, private AlumnosService: AlumnosService){
    this.form = this.fb.group({
      nombre: ["", [Validators.required, Validators.minLength(3)]]
    });
  }

  /* DUDA */
  ngAfterViewInit(){
    setTimeout(() => {
      console.log("btnMain", this.btnMain.nativeElement);
      this.btnMain.nativeElement.blur();
    },10000);
  }

  ngOnInit(){
    /**PODEMOS
     * PEDIR DATOS A UNA API
     * CAMBIAR DATOS DEL TEMPLATE
     * DE MAS
     */
    this.estudiantes = this.AlumnosService.getAlumnosSinId();
    /**TRAEMOS EL OBSERVABLE DEL HIJO Y CON SUSSCRIBE ESCUHAMOS SI EMITE EVENTOS */
    this.AlumnosService.getObs().subscribe(
      value => console.log(value)
    );

    this.estudiantesObs = this.AlumnosService.getAlumnosObs();
    setTimeout(() => {
      this.loading = false;
      this.name = "CELESTE";
    }, 10000);
  }

  nameChange(newName : string){
    this.name = newName;
    console.log("Nombre cambiado a:", this.name);
  }

  /** FUNCIONES
 * ✅ PURAS: NO dependen de variables externas (como this.algo).
 *           Solo usan sus propios parámetros.
 *           Siempre devuelven el mismo resultado si los parámetros son iguales.
 *
 * ❌ IMPURAS: Usan o modifican variables externas (estado global o this.algo),
 *             hacen efectos secundarios (peticiones, acceso al DOM, logs, etc.).
 *             El resultado puede cambiar aunque los parámetros sean los mismos.
 */
}
