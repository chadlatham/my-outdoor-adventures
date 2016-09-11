import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routed Components
import { LandingComponent } from './comps/landing/landing.component';
import { MainComponent } from './comps/main/main.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'main',
    component: MainComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
