import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from "./student/student.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { PerfilUsuarioComponent } from "./perfil-usuario/perfil-usuario.component";
import { HijoComponent } from './hijo/hijo.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlumnosServiceService } from './alumnos-service.service';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, StudentComponent, NavbarComponent, CommonModule, PerfilUsuarioComponent, HijoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnInit{
  form: FormGroup;

  @ViewChild("btnMain") btnMain!:ElementRef<HTMLButtonElement>;

  estudiantes : any;

  name : string = "celeste";
  title = 'proyecto_prueba';
  edad = 27;
  isDisabled = false;
  loading = true;
  namesArray = ["Celeste", "Melissa", "Tati"];
  myDate = new Date();

  constructor(private fb: FormBuilder, private alumnosServiceService: AlumnosServiceService){
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
    this.estudiantes = this.alumnosServiceService.getAlumnosSinId();
    setTimeout(() => {
      this.loading = false;
      this.name = "CELESTE";
    }, 10000);
  }

  nameChange(newName : string){
    this.name = newName;
    console.log("Nombre cambiado a:", this.name);
  }
}
