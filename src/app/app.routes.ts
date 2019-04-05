import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from "./components/about/about.component";
import { CoursesComponent } from "./components/courses/courses.component";
import { EventsComponent } from "./components/events/events.component";
import { ContactComponent } from "./components/contact/contact.component"
import { BlogComponent } from "./components/blog/blog.component";
import { RegistroComponent } from "./components/registro/registro.component";

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'events', component: EventsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'registro', component: RegistroComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
