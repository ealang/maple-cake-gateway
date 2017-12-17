import { Component } from '@angular/core';
import { GreeterService } from './greeter.service';

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
    return [[GreeterService]];
  }

  constructor (greeterService) {
    this.address = '';
    this.greeting = '';

    greeterService.address.then(address => {
      this.address = address;
    });
    greeterService.greeting().then(greeting => {
      this.greeting = greeting;
    });
  }
}

export {AppComponent};
