import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserRegistryService } from './eth/user-registry.service';
import { Web3Service } from './eth/web3.service';
import { Module } from '../ng-annotations';

class AppModule extends Module({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserRegistryService, Web3Service],
  bootstrap: [AppComponent]
}) {

}

export {AppModule};
