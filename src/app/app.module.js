import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GreeterService } from './greeter.service';

class AppModule {
  static get annotations() {
    return [
      new NgModule({
        declarations: [
          AppComponent
        ],
        imports: [
          BrowserModule
        ],
        providers: [GreeterService],
        bootstrap: [AppComponent]
      }),
    ];
  }

  constructor () {}
}

export {AppModule};
