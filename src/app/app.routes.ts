import { Routes } from '@angular/router';
import { Aboutpage } from './components/aboutPage/aboutpage/aboutpage';
import { Home } from './components/homePage/home/home';
import { Servicepage } from './components/servicepage/servicepage';
import { Contactpage } from './components/contactpage/contactpage';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home, title: 'Home' },
    { path: 'about', component: Aboutpage, title: 'About Us' },
    { path: 'services', component: Servicepage, title: 'Services' },
    { path: 'contact', component: Contactpage, title: 'Contact' },
    { path: '**', redirectTo: 'home' }
];
