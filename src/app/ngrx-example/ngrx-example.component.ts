import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../ngrx/contador/contador.actions';

@Component({
  selector: 'app-ngrx-example',
  imports: [AsyncPipe],
  templateUrl: './ngrx-example.component.html',
  styleUrl: './ngrx-example.component.css'
})
export class NgrxExampleComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
