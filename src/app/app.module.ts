import { NgFormulatorModule } from 'ng-formulator';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgFormulatorModule.forRoot({
      activeColor: '#45B8C5',
      inactiveColor: '#626A6F',
      errorColor: '#FF6057'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
