import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Routed Components
import { AdventurerComponent } from './comps/adventurer/adventurer.component';
import { CampgroundComponent } from './comps/campground/campground.component';
import { LoginComponent } from './comps/login/login.component';
import { NewAdventureComponent } from
  './comps/new-adventure/new-adventure.component';
import { NotFoundComponent } from './comps/not-found/not-found.component';
import { RegisterComponent } from './comps/register/register.component';
import { SearchComponent } from './comps/search/search.component';
import { SettingsComponent } from './comps/settings/settings.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/search'
  },
  {
    component: AdventurerComponent,
    path: 'adventurer/:userName'
  },
  {
    component: CampgroundComponent,
    path: 'campground'
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: NewAdventureComponent,
    path: 'adventure'
  },
  {
    component: RegisterComponent,
    path: 'register'
  },
  {
    component: SearchComponent,
    path: 'search'
  },
  {
    component: SettingsComponent,
    path: 'settings'
  },
  {
    component: NotFoundComponent,
    path: '**'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
