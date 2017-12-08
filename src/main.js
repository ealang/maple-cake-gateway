import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import 'zone.js'
import './styles.less'

platformBrowserDynamic().bootstrapModule(AppModule)
