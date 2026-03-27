import { Routes } from '@angular/router';
import { Aboutpage } from './components/aboutPage/aboutpage/aboutpage';
import { Home } from './components/homePage/home/home';
import { Servicepage } from './components/servicepage/servicepage';

export const routes: Routes = [
    { path: '', component: Home, title: 'Home' },
    { path: 'about', component: Aboutpage, title: 'About Us' },
    { path: 'services', component: Servicepage, title: 'Services' },
    { path: '**', redirectTo: '' }
];
