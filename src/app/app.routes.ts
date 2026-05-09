import { Routes } from '@angular/router';
import { Aboutpage } from './components/aboutPage/aboutpage/aboutpage';
import { Home } from './components/homePage/home/home';
import { Servicepage } from './components/servicepage/servicepage';
import { Contactpage } from './components/contactpage/contactpage';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home, title: 'Sujit Gajare | Frontend Developer' },
    { path: 'about', component: Aboutpage, title: 'About | Sujit Gajare' },
    { path: 'services', component: Servicepage, title: 'Services | Sujit Gajare' },
    { path: 'contact', component: Contactpage, title: 'Contact | Sujit Gajare' },
    { path: '**', redirectTo: 'home' }
];
