import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CoursesComponent } from './components/courses/courses.component';
import { EventsComponent } from './components/events/events.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { RegistroComponent } from './components/registro/registro.component';

// Importar rutas
import { ROUTES } from './app.routes';
//Librerias
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    EventsComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    BlogComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    NgbModule.forRoot(),
    CarouselModule,
    YoutubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
