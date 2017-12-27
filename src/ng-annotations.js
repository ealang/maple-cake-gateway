import { Component as NgComponent, Injectable as NgInjectable, NgModule } from '@angular/core';

const withDependencies = (dependencies) => class Class {
  static get parameters() {
    return (dependencies || []).map(dep => [dep]);
  }
};

export const Injectable = (dependencies) => class extends withDependencies(dependencies) {
  static get annotations() {
    return [
      new NgInjectable()
    ];
  }
};

export const Component = (bindParams, dependencies) => class extends withDependencies(dependencies) {
  static get annotations() {
    return [
      new NgComponent(bindParams)
    ];
  }
};

export const Module = (modParams) => class {
  static get annotations() {
    return [
      new NgModule(modParams),
    ];
  }
};
