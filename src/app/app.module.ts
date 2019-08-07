import { NgFormulatorModule } from './../../projects/ng-formulator/src/lib/ng-formulator.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgFormulatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
