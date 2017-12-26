import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserRegistryService } from './eth/user-registry.service';
import { Web3Service } from './eth/web3.service';

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
        providers: [UserRegistryService, Web3Service],
        bootstrap: [AppComponent]
      }),
    ];
  }

  constructor () {}
}

export {AppModule};
