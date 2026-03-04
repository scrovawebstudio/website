import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { ContactInfo } from './components/contact-info/contact-info';
import { Copyright } from './components/copyright/copyright';
import { ScrollTop } from './components/scroll-top/scroll-top';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ContactInfo, Copyright, ScrollTop ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('scrova-web-studio');
}
