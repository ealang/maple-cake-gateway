import { Component } from '@angular/core';

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

  constructor () {}
}

export {AppComponent};
