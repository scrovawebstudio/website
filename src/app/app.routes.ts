import { Routes } from '@angular/router';
import { Aboutpage } from './components/aboutPage/aboutpage/aboutpage';
import { Home } from './components/homePage/home/home';

export const routes: Routes = [
    { path: '', component: Home, title: 'Home' },
    { path: 'about', component: Aboutpage, title: 'About Us' },
    { path: '**', redirectTo: '' }
];
