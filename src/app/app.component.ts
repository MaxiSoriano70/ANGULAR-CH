import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from "./student/student.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgrxExampleComponent } from "./ngrx-example/ngrx-example.component";

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, StudentComponent, NavbarComponent, CommonModule, RouterOutlet, NgrxExampleComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practicas';

  obtenerTitulo(){
    return "Hola mundo";
  }
}
