import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() name: string = "";
  @Output() nameChange : EventEmitter<string> = new EventEmitter<string>();

  changeName(newName: string){
    this.nameChange.emit(newName);
  }
}
