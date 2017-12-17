import './polyfills.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import './styles.less';

platformBrowserDynamic().bootstrapModule(AppModule);
