import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  id: string | null;

  constructor(private activateRoute: ActivatedRoute){
    this.id = this.activateRoute.snapshot.paramMap.get("id");
  }
}
