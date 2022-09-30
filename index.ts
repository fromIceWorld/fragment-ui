import { PlatformBrowserDynamic } from 'mark5';
import { AppModule } from './modules/app.module';
let platform = PlatformBrowserDynamic();
platform.bootstrapModule(AppModule, document.getElementById('root')!);
