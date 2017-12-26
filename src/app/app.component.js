import { Component } from '@angular/core';
import { UserRegistryService } from './user-registry.service';

class AppComponent {
  static get annotations() {
    return [
      new Component({
        selector: 'app-root',
        template: require('./app.component.html'),
        styles: [require('./app.component.less')]
      }),
    ];
  }

  static get parameters() {
    return [[UserRegistryService]];
  }

  constructor (userRegistry) {
    this.address = '';
    this.banner = '';

    userRegistry.address.then(address => {
      this.address = address;
    });
    userRegistry.banner().then(banner => {
      this.banner = banner;
    });
  }
}

export {AppComponent};
