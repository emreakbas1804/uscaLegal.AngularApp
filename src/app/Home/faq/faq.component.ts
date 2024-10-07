import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  faqs = [
    {
      question: 'Boşanma davalarında mal paylaşımı nasıl yapılır?',
      answer: 'Boşanma davalarında mal paylaşımı, eşlerin evlilik süresince edindikleri malların paylaştırılmasıyla yapılır. Ancak, kişisel mallar ve evlilik öncesi edinilen varlıklar bu paylaşım dışında tutulabilir.'
    },
    {
      question: 'Ceza davalarında delil yetersizliği durumunda ne olur?',
      answer: 'Delil yetersizliği durumunda, sanığın suçsuz olduğuna karar verilir ve beraat edilir. Ancak, yeni deliller ortaya çıkarsa dava yeniden açılabilir.'
    },
    {
      question: 'İşçi tazminat hakkını nasıl talep edebilir?',
      answer: 'İşçi tazminat hakkını iş mahkemesine başvurarak talep edebilir. İş sözleşmesinin feshi ve fesih nedeni, tazminat talebinde önemli rol oynar.'
    },
    {
      question: 'Miras davası ne kadar sürer?',
      answer: 'Miras davaları genellikle dava konusuna, delillerin toplanma süresine ve tarafların uzlaşma durumuna bağlı olarak 6 ay ile 2 yıl arasında sürebilir.'
    },
    {
      question: 'İş yerinde mobbing nasıl kanıtlanır?',
      answer: 'Mobbing kanıtlamak için şahit beyanları, yazılı deliller, e-posta ve mesajlar kullanılabilir. Ayrıca iş yerinde yapılan sistematik baskının sürekliliği de önemlidir.'
    },
    {
      question: 'Kira sözleşmesi süresi dolmadan nasıl feshedilir?',
      answer: 'Kira sözleşmesi süresi dolmadan feshedilmek isteniyorsa haklı nedenlere dayanılmalıdır. Bu nedenler kiracının taşınmazı amacı dışında kullanması, kirayı ödememesi ya da taşınmazın hasar görmesi gibi durumlar olabilir.'
    },
    {
      question: 'Türk Ceza Kanunu’na göre dolandırıcılık suçu nasıl tanımlanır?',
      answer: 'Dolandırıcılık, hileli hareketlerle bir kimseyi kandırarak onun veya başkasının zararına haksız bir kazanç elde edilmesi suçudur. Bu suç, hem şikayet üzerine hem de resen takip edilebilir.'
    },
    {
      question: 'GDPR ihlali durumunda ne gibi yaptırımlar uygulanır?',
      answer: 'GDPR ihlali durumunda, ihlalin büyüklüğüne ve doğasına göre çeşitli yaptırımlar uygulanabilir. Bunlar arasında yüksek para cezaları, veri işleme faaliyetlerinin durdurulması ve dava açılması yer alır.'
    },
    {
      question: 'İş akdi feshedilen işçi ne kadar süre içinde dava açmalıdır?',
      answer: 'İş akdi feshedilen işçi, haksız fesih olduğunu düşünüyorsa fesih tarihinden itibaren 30 gün içinde işe iade davası açabilir. Bu süre hak düşürücü niteliktedir.'
    },
    {
      question: 'Gayrimenkul satışında tapu işlemleri nasıl gerçekleştirilir?',
      answer: 'Gayrimenkul satışında tapu işlemleri, tapu müdürlüğünde yapılır. Satış için tarafların kimlik belgeleri, vergi levhası ve tapu belgesi gereklidir.'
    },
    {
      question: 'İcra takibi nasıl başlatılır?',
      answer: 'İcra takibi, alacaklı tarafından icra dairesine yapılacak başvuru ile başlatılır. Alacaklı, alacağını icra yolu ile talep edebilir ve borçlu ödemezse haciz işlemleri başlatılabilir.'
    },
    {
      question: 'Ev kiracısı depozitoyu nasıl geri alabilir?',
      answer: 'Ev kiracısı, kira sözleşmesi sona erdiğinde taşınmazı hasarsız teslim ederse depozitosunu geri alabilir. Kiraya verenin herhangi bir zararı kanıtlarsa, depozitodan düşülebilir.'
    }
  ];

}
