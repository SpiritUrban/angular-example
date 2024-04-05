import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducers/counter.reducer';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: counterReducer }),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 25 }) : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
