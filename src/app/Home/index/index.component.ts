import { Component, OnInit } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  private backgrounds = [
    '/assets/images/bg1.jpg',
    '/assets/images/bg2.jpg',
    '/assets/images/bg3.jpg',
    '/assets/images/bg4.jpg'
  ];

  private headers = [
    'Doğru Rehberlik, Güçlü Savunma',
    'Uzman Ekibimizle Yanınızdayız',
    'Hukukta Güvenli Adımlar Atın',
    'Hukukun Kapsamlı Çözümleri'
  ];

  private descriptions = [
    'Hukukun karmaşıklığı içinde güvenilir bir rehber arıyorsanız, tecrübemiz ve uzmanlığımızla yanınızdayız.',
    'Her zaman en iyi çözümü bulmak için profesyonel ekibimizle çalışıyoruz.',
    'Adalet ve haklarınızı savunurken yanınızda olmaktan gurur duyuyoruz.',
    "USCA Legal, hukuk alanındaki karmaşık sorunlarınıza pratik ve etkili çözümler sunar. İster bireysel, ister kurumsal olsun, ihtiyaçlarınıza özel hizmetlerle yanınızdayız"
  ];

  private currentIndex = 0;
  ngOnInit(): void {
    this.updateContent(false);  // İlk başta beklemeden göster
    this.setupEventHandlers();
    this.startAutoSlide();
  }

  setupEventHandlers(): void {
    $('#next-btn').on('click', () => this.next());
    $('#prev-btn').on('click', () => this.prev());
  }

  startAutoSlide(): void {
    setInterval(() => this.next(), 5000); // 5 saniyede bir otomatik geçiş
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.backgrounds.length;
    this.updateContent(false);
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.backgrounds.length) % this.backgrounds.length;
    this.updateContent(false,);
  }

  updateContent(animate: boolean): void {
    const headerElement = $('#dynamic-header');
    const textElement = $('#dynamic-text');

    if (animate) {
      // Animasyonu başlat
      
      setTimeout(() => {
        // Yeni içeriği göster
        headerElement.text(this.headers[this.currentIndex]).fadeIn(10000);
        textElement.text(this.descriptions[this.currentIndex]).fadeIn(10000);
        
        // Arka plan resmini güncelle
        $('.breadcrumb-with-bg-image').css('background-image', 'url(' + this.backgrounds[this.currentIndex] + ')');
      }, 5000);
    } else {
      // Animasyon olmadan içerik göster
      headerElement.text(this.headers[this.currentIndex]);
      textElement.text(this.descriptions[this.currentIndex]);
      $('.breadcrumb-with-bg-image').css('background-image', 'url(' + this.backgrounds[this.currentIndex] + ')');
    }
  }

}
