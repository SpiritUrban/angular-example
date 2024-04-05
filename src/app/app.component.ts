import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CounterActions } from './store/counter.actions';
import { Observable } from 'rxjs';

interface AppState {
   counter:{value: number};
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.pipe(select(state => state.counter.value));
  }

  increment() {
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }
}






