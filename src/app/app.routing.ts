import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Routed Components
import { LandingComponent } from './comps/landing/landing.component';
import { MainComponent } from './comps/main/main.component';
import { NotFoundComponent } from './comps/not-found/not-found.component';

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
  },
  {
    component: NotFoundComponent,
    path: '**'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
