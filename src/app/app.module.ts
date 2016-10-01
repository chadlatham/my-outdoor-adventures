// Angular Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';

// Angular Material Modules
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdInputModule } from '@angular2-material/input';
import { MdToolbarModule } from '@angular2-material/toolbar';

// The Router Config
import { routing } from './app.routing';

// 3rd Party Components

// 3rd Party Modules
import { MyDatePickerModule } from './modules/my-date-picker/my-date-picker.module';
import './rxjs-extensions';
import { MaterializeDirective } from 'angular2-materialize';

// My Services
import { AdventuresService } from './srvcs/adventures.service';
import { AuthService } from './srvcs/auth.service';
import { FacilitiesService } from './srvcs/facilities.service';
import { ImageService } from './srvcs/image.service';
import { IpInfoService } from './srvcs/ip-info.service';
import { PersistService } from './srvcs/persist.service';

// My Pipes
import { EscapeHtmlPipe } from './pipes/escape-html.pipe';
import { HttpsUrlPipe } from './pipes/https-url.pipe';
import { RoundPipe } from './pipes/round.pipe';

// Bootstrapped Routing Component
import { AppComponent } from './app.component';

// My Routed Components
import { AdventurerComponent } from './comps/adventurer/adventurer.component';
import { CampgroundComponent } from './comps/campground/campground.component';
import { LoginComponent } from './comps/login/login.component';
import { NewAdventureComponent } from
  './comps/new-adventure/new-adventure.component';
import { NotFoundComponent } from './comps/not-found/not-found.component';
import { RegisterComponent } from './comps/register/register.component';
import { SearchComponent } from './comps/search/search.component';
import { SettingsComponent } from './comps/settings/settings.component';

// My Non-Routed Components
import { SearchCampsComponent } from
  './comps/search-camps/search-camps.component';
import { SearchResultsComponent } from
  './comps/search-results/search-results.component';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    AdventurerComponent,
    CampgroundComponent,
    EscapeHtmlPipe,
    HttpsUrlPipe,
    LoginComponent,
    MaterializeDirective,
    NewAdventureComponent,
    NotFoundComponent,
    RegisterComponent,
    RoundPipe,
    SearchComponent,
    SearchCampsComponent,
    SearchResultsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdToolbarModule,
    MyDatePickerModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    AdventuresService,
    AuthService,
    FacilitiesService,
    ImageService,
    IpInfoService,
    PersistService
  ]
})

export class AppModule { }
