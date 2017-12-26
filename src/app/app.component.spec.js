import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserRegistryService } from './user-registry.service';

describe('AppComponent', () => {
  const userRegistryServiceStub = {
    banner: () => Promise.resolve('hello maple cake'),
    address: Promise.resolve('0x123')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: UserRegistryService, useValue: userRegistryServiceStub }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have banner 'hello maple cake'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.whenStable().then(() => {
      expect(app.banner).toEqual('hello maple cake');
    });
  }));

  it('should render banner in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h2.banner').textContent).toContain('hello maple cake');
    });
  }));
});
