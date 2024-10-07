import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  info: string | null = null;
  infoColor: string | null = null;
  loading: boolean = false;
  contact: any = {
    nameSurname: '',
    email: '',
    phone: '',
    message: ''
  };

  constructor() { }

  ngOnInit(): void { }

  submitContact(form: NgForm) {
    if (form.invalid) {
      this.info = "Form Eksiksiz Doldurulmalı";
      this.infoColor = "danger";
      return;
    }

    this.loading = true;

    const contact = {
      nameSurname: this.contact.nameSurname, 
      email: this.contact.email, 
      phone: this.contact.phone,
      message: this.contact.message 
    };       
    this.loading = false;
  }

}