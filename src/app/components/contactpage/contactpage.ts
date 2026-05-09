import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contactpage',
  imports: [ReactiveFormsModule],
  templateUrl: './contactpage.html',
  styleUrl: './contactpage.scss',
})
export class Contactpage {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      this.http.post('https://formspree.io/f/mreoyepe', formData).subscribe({
        next: () => {
          alert('Message sent successfully!');
          this.contactForm.reset();
        },
        error: () => {
          alert('Error sending message. Please try again.');
        }
      });
    }
  }

  sendWhatsApp() {
    const { name, email, message } = this.contactForm.value;
    const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const phone = '918149862034';
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  }
}
