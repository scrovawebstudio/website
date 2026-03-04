import { Component } from '@angular/core';
import { Header } from '../../header/header';
import { Services } from '../services/services';
import { About } from '../about/about';
import { WhyUs } from '../why-us/why-us';
import { AboutMe } from '../about-me/about-me';
import { Testimonials } from '../testimonials/testimonials';
import { ContactInfo } from '../../contact-info/contact-info';
import { Copyright } from '../../copyright/copyright';
import { ScrollTop } from '../../scroll-top/scroll-top';

@Component({
  selector: 'app-home',
  imports: [Services, About, WhyUs, AboutMe, Testimonials],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
