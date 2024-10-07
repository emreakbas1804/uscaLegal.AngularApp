import { Component, OnInit } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  backgrounds = [
    '/assets/images/bg1.jpg',
    '/assets/images/bg2.jpg',
    '/assets/images/bg3.jpg',
    '/assets/images/bg4.jpg'
  ];

  
  currentIndex = 0;


   headers = [
    'Doğru Rehberlik, Güçlü Savunma',
    'Uzman Ekibimizle Yanınızdayız',
    'Hukukta Güvenli Adımlar Atın',
    'Hukukun Kapsamlı Çözümleri'
  ];

   descriptions = [
    'Hukukun karmaşıklığı içinde güvenilir bir rehber arıyorsanız, tecrübemiz ve uzmanlığımızla yanınızdayız.',
    'Her zaman en iyi çözümü bulmak için profesyonel ekibimizle çalışıyoruz.',
    'Adalet ve haklarınızı savunurken yanınızda olmaktan gurur duyuyoruz.',
    "USCA Legal, hukuk alanındaki karmaşık sorunlarınıza pratik ve etkili çözümler sunar. İster bireysel, ister kurumsal olsun, ihtiyaçlarınıza özel hizmetlerle yanınızdayız"
  ];

  ngOnInit(): void {
    this.startImageSlider();
  }

  startImageSlider() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.backgrounds.length;
    }, 5000); 
  }

  showPrevSlide(){
    this.currentIndex = (this.currentIndex - 1 + this.backgrounds.length) % this.backgrounds.length;
  }
  
  showNextSlide(){
    this.currentIndex = (this.currentIndex + 1) % this.backgrounds.length;
  }

}
