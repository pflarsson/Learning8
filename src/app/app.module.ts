import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { CountState } from '../../src/app/store/store.state';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 //   NgxsModule.forRoot([CountState]),
    NgxsModule.forRoot([CountState])
  ],
  providers: [],
  bootstrap: [AppComponent],

})

export class AppModule {

/* public newMethod() {
  return NgxsModule.forRoot([CountState]);
} */
}
