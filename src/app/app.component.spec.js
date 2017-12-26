import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserRegistryService } from './eth/user-registry.service';
import { Web3Service } from './eth/web3.service';

describe('AppComponent', () => {
  const userRegistryServiceStub = {
    banner: () => Promise.resolve('hello maple cake'),
    address: Promise.resolve('0x123')
  };
  const web3ServiceStub = {
    web3: Promise.resolve({
      eth: {
        accounts: ['0x456']
      }
    })
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: UserRegistryService, useValue: userRegistryServiceStub },
        {provide: Web3Service, useValue: web3ServiceStub }
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
