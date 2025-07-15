import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from "./student/student.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { PerfilUsuarioComponent } from "./perfil-usuario/perfil-usuario.component";
import { HijoComponent } from './hijo/hijo.component';

@Component({
  selector: 'app-root',
  imports: [StudentComponent, NavbarComponent, CommonModule, PerfilUsuarioComponent, HijoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name : string = "celeste";
  title = 'proyecto_prueba';
  edad = 27;
  isDisabled = false;
  loading = true;
  namesArray = ["Celeste", "Melissa", "Tati"];
  myDate = new Date();

  ngOnInit(){
    setTimeout(()=>{
      this.loading = false;
      this.name = "CELESTE";
    }, 10000);
  }

  nameChange(newName : string){
    this.name = newName;
    console.log("Nombre cambiado a:", this.name);
  }
}
