import { Injectable } from '@angular/core';

export class Service {
  static get annotations() {
    return [
      new Injectable()
    ];
  }
}
