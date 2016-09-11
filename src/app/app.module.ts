// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

// The Router Config
import { routing } from './app.routing';

// 3rd Party Modules
import './rxjs-extensions';

// My Services

// Bootstrapped Routing Component
import { AppComponent } from './app.component';

// My Components
import { LandingComponent } from './comps/landing/landing.component';
import { MainComponent } from './comps/main/main.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    LandingComponent,
    MainComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
