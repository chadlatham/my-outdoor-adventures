// Angular Modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';

// Angular Material Modules
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';

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
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    LandingComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCardModule,
    routing
  ],
  providers: []
})

export class AppModule { }
