import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';

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
  private readonly apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

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

    const formData: FormData = new FormData();
    formData.append("nameSurname", contact.nameSurname);
    formData.append("email", contact.email);
    formData.append("phone", contact.phone);
    formData.append("message", contact.message);

    this.http.post<boolean>(this.apiUrl + "/home/SendEmailForUscaLegal", formData)
    .subscribe({
      next: (result) => {
        // İstek başarıyla tamamlandı
        console.log("İstek başarılı, sonuç: ", result);
        if (result) {
          this.info = "Mesaj başarıyla gönderildi.";
          this.infoColor = "success";
        } else {
          this.info = "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyiniz.";
          this.infoColor = "danger";
        }
      },
      error: (error) => {
        // İstek sırasında hata oluştu
        console.error("İstek sırasında hata oluştu: ", error);
        this.info = "Mesaj gönderilirken bir hata oluştu.";
        this.infoColor = "danger";
      },
      complete: () => {
        // İstek tamamlandı, başarılı ya da hata olabilir
        this.loading = false;
        console.log("İstek tamamlandı.");
      }
    });

    
    this.loading = false;
    form.reset();
  }

  }