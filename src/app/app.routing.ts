import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Routed Components
import { LandingComponent } from './comps/landing/landing.component';
import { MainComponent } from './comps/main/main.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/landing'
  },
  {
    component: LandingComponent,
    path: 'landing'
  },
  {
    component: MainComponent,
    path: 'main'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
