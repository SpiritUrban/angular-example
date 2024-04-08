import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';

import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
// Reducers
import { counterReducer } from './store/counter/counter.reducer';
import { taskReducer } from './store/task/task.reducer';
import { postReducer } from './store/post/post.reducer';
// Effects
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './store/post/post.effects';
// import { TaskEffects } from './store/task/task.effects';


import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './environments/environment';

import { AppState } from './store/app.state';

// Функция для сохранения состояния в localStorage
function saveToLocalStorage(state: AppState): void {
  localStorage.setItem('appState', JSON.stringify(state));
}

function preloadStateFromLocalStorage(): AppState {
  const savedState = localStorage.getItem('appState');
  return savedState ? JSON.parse(savedState) : undefined;
}

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);
    // Получаем новое состояние, используя переданный редьюсер
    const nextState = reducer(state, action);
    // Сохраняем новое состояние в localStorage
    saveToLocalStorage(nextState);
    // Возвращаем новое состояние
    return nextState;
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([PostEffects]),
    StoreModule.forRoot({
      counter: counterReducer,
      task: taskReducer,
      post: postReducer
    },
      {
        metaReducers,
        initialState: { // Установка начального состояния из localStorage
          ...preloadStateFromLocalStorage()
        }
      },
    ),
    
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 25 }) : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
