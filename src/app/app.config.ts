import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Core Configuration Providers
import { providePrimeNG } from 'primeng/config';
// FIX: Imported from '@primeng/themes/aura' instead of '@primeuix/themes/aura'
import Aura from '@primeuix/themes/aura'; 
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { tokenInterceptor } from '../interceptor/token-interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([tokenInterceptor])),
    importProvidersFrom(
AngularSvgIconModule.forRoot()
),

    providePrimeNG({ 
        theme: {
            preset: Aura,
            options: {
                darkModeSelector: '.p-dark' 
            }
        }
    })
  ]
};


