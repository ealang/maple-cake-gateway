import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GreeterService } from './greeter.service';

describe('AppComponent', () => {
  const greeterServiceStub = {
    greeting: () => Promise.resolve('hello maple cake'),
    address: Promise.resolve('0x123')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: GreeterService, useValue: greeterServiceStub }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have greeting 'hello maple cake'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.whenStable().then(() => {
      expect(app.greeting).toEqual('hello maple cake');
    });
  }));

  it('should render greeting in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h2.greeting').textContent).toContain('hello maple cake');
    });
  }));
});
