import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserRegistryService } from './user-registry.service';

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
        providers: [UserRegistryService],
        bootstrap: [AppComponent]
      }),
    ];
  }

  constructor () {}
}

export {AppModule};
