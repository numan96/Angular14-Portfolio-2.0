import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

declare var google: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [MessageService],
})
export class ContactComponent implements OnInit {
  options: any;
  overlays!: any[];

  contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  });
  constructor(
    private _http: HttpClient,
    private _messageService: MessageService
  ) {}

  ngOnInit() {
    this.options = {
      center: { lat: 51.628401538627706, lng: -0.7482381949773209 },
      zoom: 12,
    };

    this.overlays = [
      new google.maps.Marker({
        position: { lat: 51.628401538627706, lng: -0.7482381949773209 },
        title: 'My Location',
      }),
    ];
  }

  onSubmit() {
    const email = this.contactForm.value;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this._http
      .post(
        'https://formspree.io/f/xoqyazdy',
        { name: email.name, replyto: email.email, message: email.message },
        { headers: headers }
      )
      .subscribe(() => {
        this._messageService.add({
          key: 'bc',
          severity: 'success',
          summary: 'Email Sent',
          detail: 'Numan has received your message!',
        });
      });
    this.contactForm.reset();
  }
}
