import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CounterActions } from './store/counter/counter.actions';
import { TaskActions } from './store/task/task.actions';
import { Observable } from 'rxjs';
import { selectCounterValue } from './store/counter/counter.selectors';

import { AppState } from './store/app.state';

import {PostActions} from './store/post/post.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  count$: Observable<number>;
  count2$: Observable<number>;
  tasks$: Observable<any>;
  posts$: Observable<any>;


  constructor(private store: Store<AppState>) {
    this.count$ = this.store.pipe(select(state => state.counter.value));
    this.count2$ = this.store.select(selectCounterValue);
    this.tasks$ = this.store.pipe(select(state => state.task.list));
    this.posts$ = this.store.pipe(select(state => state.post.list));
  }
  ngOnInit() {
        // Представим, что у нас есть данные о постах
        const posts = [{ title: 'First Post' }, { title: 'Second Post' }];

        // Вызываем 'Load Posts Success' действие с данными о постах
        this.store.dispatch(PostActions.loadPosts());
  }

  increment() {
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }

  onAddTask() {
    this.store.dispatch(TaskActions.addTask({ name: 'Angular' }));
  }
}






