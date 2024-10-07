import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit{
  id : any ="";
  services:any[] = [
    { 
      id: 1,
      header: 'Aile Hukuku', 
      shortDescription: 'Aile içi hukuki ilişkilerin düzenlenmesi ve uyuşmazlıkların çözümüne yönelik kapsamlı hizmetler.', 
      content: `
      <div class="container my-5">
  <h2 class="text-center mb-4">Aile Hukuku İstanbul | USCA Legal Hukuk ve Danışmanlık</h2>
  <p><strong>USCA Legal Hukuk ve Danışmanlık</strong>, aile hukuku alanında uzmanlaşmış ekibiyle, İstanbul'da müvekkillerine kapsamlı ve profesyonel hukuki danışmanlık hizmetleri sunmaktadır. Aile hukuku, evlilik, boşanma, nafaka, velayet, mal paylaşımı ve evlat edinme gibi çok çeşitli konuları kapsayan, bireylerin ailevi hak ve yükümlülüklerini düzenleyen önemli bir hukuk dalıdır. USCA Legal, aile hukuku davalarında müvekkillerinin haklarını korumak için her türlü hukuki desteği sağlamaktadır.</p>

  <div class="row my-4">
    <div class="col-md-12">
      <h3>Aile Hukuku Nedir?</h3>
      <p><strong>Aile hukuku</strong>, bireylerin ailevi ilişkilerini ve bu ilişkilerden doğan hak ve sorumlulukları düzenleyen hukuk dalıdır. <em>USCA Legal</em>, aile içi anlaşmazlıklar ve hukuki sorunlar karşısında müvekkillerine etkili çözümler sunmaktadır. Bu davalar, taraflar arasında duygusal ve maddi açıdan zorlayıcı süreçler olabileceği için deneyimli bir avukat desteği almak oldukça önemlidir.</p>
    </div>
   
  </div>

  <h3>Aile Hukuku Kapsamında Verdiğimiz Hizmetler</h3>
  <ul class="list-group list-group-flush my-3">
    <li class="list-group-item"><strong>Boşanma Davaları:</strong> Anlaşmalı ve çekişmeli boşanma davalarında müvekkillerimizin çıkarlarını en iyi şekilde temsil ediyoruz.</li>
    <li class="list-group-item"><strong>Nafaka ve Mal Paylaşımı:</strong> Boşanma sonrasında nafaka ve mal paylaşımı süreçlerinde müvekkillerimize hukuki destek sağlıyoruz.</li>
    <li class="list-group-item"><strong>Velayet Davaları:</strong> Çocukların velayetinin belirlenmesi sürecinde, müvekkillerimizin haklarını savunuyor ve en iyi çözüm yollarını sunuyoruz.</li>
    <li class="list-group-item"><strong>Evlat Edinme ve Vasi Atanması:</strong> Evlat edinme ve vasilik işlemlerinde hukuki danışmanlık hizmeti veriyoruz.</li>
    <li class="list-group-item"><strong>Aile İçi Şiddet ve Koruma Kararları:</strong> Aile içi şiddet durumlarında koruma kararları ve diğer hukuki tedbirlerle müvekkillerimizin güvenliğini sağlıyoruz.</li>
  </ul>

  <div class="row my-4">
    <div class="col-md-6">
      <h3>Boşanma Davalarında Destek</h3>
      <p>Boşanma davaları, tarafların evlilik birliğini sona erdirme taleplerini yargıya taşıdıkları, genellikle zorlayıcı süreçlerdir. <strong>USCA Legal</strong>, boşanma sürecinde müvekkillerine anlaşmalı boşanma veya çekişmeli boşanma davalarında hızlı ve etkili çözümler sunar. Evlilik birliğinin sona erdirilmesiyle doğan nafaka, mal paylaşımı ve çocukların velayeti gibi konularda müvekkillerimizin haklarını en iyi şekilde koruyoruz.</p>
    </div>
    <div class="col-md-6">
      <h3>Nafaka ve Mal Paylaşımı</h3>
      <p>Boşanma davaları sonrasında, tarafların maddi yükümlülükleri ve mal paylaşımı konuları gündeme gelir. <strong>USCA Legal</strong>, müvekkillerine nafaka talepleri ve mal paylaşımı süreçlerinde hukuki destek sunarak adil bir çözüm süreci sağlamaktadır.</p>
    </div>
  </div>

  <h4>İstanbul'da Aile Hukuku Avukatı</h4>
  <p><strong>USCA Legal Hukuk ve Danışmanlık</strong>, aile hukuku davalarında uzman ekibiyle, müvekkillerine profesyonel ve etkili hukuki destek sunmaktadır. <a href="https://uscalegal.av.tr/iletisim" target="blank" title="Aile Hukuku Avukatı">Aile hukuku avukatlarımız</a>, evlilik, boşanma, nafaka, mal paylaşımı ve velayet gibi konularda müvekkillerimizin haklarını koruyarak en uygun çözüm yollarını sunmaktadır.</p>

  <div class="alert alert-info my-4">
    <strong>Not:</strong> Aile hukuku davaları, bireylerin maddi ve manevi hayatlarını doğrudan etkileyen hassas süreçlerdir. Bu nedenle hukuki bir danışmanlık almak, sürecin en iyi şekilde yönetilmesi açısından büyük önem taşır.
  </div>

  <h3>Aile Hukuku ve Arabuluculuk</h3>
  <p>Çoğu aile hukuku davasında, taraflar arasında uzlaşma sağlanarak arabuluculuk yoluna gidilebilir. <strong>USCA Legal</strong>, müvekkillerine anlaşmazlıkları çözme yolunda arabuluculuk hizmeti sunar ve hukuki süreçlerin daha hızlı ve uzlaşma ile sonuçlanmasını sağlar.</p>

  <p>Detaylı bilgi almak ve aile hukuku davalarında profesyonel hukuki destek için bizimle iletişime geçebilirsiniz.</p>
</div>

      `
    },
    { id: 2, header: 'Ceza Davaları', shortDescription: 'Ceza hukukunda suç ve cezalara ilişkin dava süreçlerinin yönetimi.', content: `<div class="container my-5">
  <h2 class="text-center mb-4">Ceza Davaları | USCA Legal Hukuk ve Danışmanlık</h2>
  <p><strong>USCA Legal Hukuk ve Danışmanlık</strong>, İstanbul'da ceza hukuku alanında uzman avukatları ile müvekkillerine kapsamlı bir hukuki destek sunmaktadır. Ceza hukuku, bireylerin özgürlüklerini, haklarını ve itibarlarını doğrudan etkileyen önemli bir hukuk dalıdır. Bu nedenle, <em>ceza davaları</em> sürecinde profesyonel bir hukuki destek almak, haklarınızı korumanın en etkili yoludur.</p>

  <div class="row my-4">
    <div class="col-md-12">
      <h3>Ceza Hukuku Nedir?</h3>
      <p>Ceza hukuku, suç sayılan fiillerin tanımlandığı, suçluların cezalandırıldığı ve toplumsal düzenin sağlandığı bir hukuk dalıdır. <strong>Ceza davaları</strong>, toplumun temel güvenliğini ve bireylerin haklarını koruma amacı taşır. USCA Legal olarak, ceza hukuku alanındaki deneyimimizle müvekkillerimizin haklarını en iyi şekilde savunmaktayız.</p>
    </div>
   
  </div>

  <h3>Hangi Ceza Davalarında Hizmet Veriyoruz?</h3>
  <ul class="list-group list-group-flush my-3">
    <li class="list-group-item"><strong>Ağır Ceza Davaları:</strong> Cinayet, cinsel suçlar, uyuşturucu madde ticareti gibi ağır suçlara ilişkin davalarda müvekkillerimizi en etkin şekilde temsil ediyoruz.</li>
    <li class="list-group-item"><strong>Dolandırıcılık ve Hırsızlık Davaları:</strong> Ekonomik suçlar ve mal varlığına karşı işlenen suçlar kapsamında müvekkillerimizin savunmalarını yürütüyoruz.</li>
    <li class="list-group-item"><strong>Hakaret ve İtibar Suçları:</strong> Kişilik haklarına saldırı ve hakaret gibi suçlar konusunda hukuki süreçleri yönetiyoruz.</li>
    <li class="list-group-item"><strong>Trafik Suçları ve Kazaları:</strong> Trafik kazaları, alkol ve hız gibi trafik ihlalleri nedeniyle açılan ceza davalarında müvekkillerimizi savunuyoruz.</li>
  </ul>

  <h3>Ceza Davası Süreci</h3>
  <p>Ceza davaları, soruşturma aşamasından başlayarak kovuşturma ve mahkeme süreçlerine kadar titizlikle yönetilmesi gereken davalardır. <strong>USCA Legal</strong> olarak, ceza davası sürecinin her aşamasında müvekkillerimize hukuki destek sağlıyor ve haklarını savunmak için en etkili stratejileri belirliyoruz.</p>
  <p>Ceza davalarında, delil toplama, tanık ifadeleri, bilirkişi raporları ve diğer hukuki argümanlar, davanın seyrini değiştiren en önemli unsurlardır. Ekibimiz, bu süreçlerde müvekkillerimizin haklarını en iyi şekilde savunmak için kapsamlı bir çalışma yürütmektedir.</p>

  <h4>Arabuluculuk ve Ceza Davalarında Uzlaşma</h4>
  <p>Ceza davalarının bazı türlerinde, taraflar arasında uzlaşma sağlanabilir ve davalar çözümle sonlandırılabilir. USCA Legal olarak, <em>arabuluculuk</em> ve <em>uzlaşma süreçlerinde</em> müvekkillerimizi temsil ederek, davaların yargı yoluna gitmeden sonuca ulaşmasını sağlıyoruz.</p>

  <div class="alert alert-info my-4">
    <strong>Not:</strong> Ceza davaları, özgürlüğünüzü ve haklarınızı doğrudan etkileyebilecek ciddi davalardır. Bu nedenle, hukuki bir desteğe ihtiyacınız varsa, ceza davalarında uzman bir avukatla çalışmanız büyük önem taşır.
  </div>

  <h3>İstanbul'da Ceza Hukuku Avukatı</h3>
  <p><strong>USCA Legal Hukuk ve Danışmanlık</strong>, ceza davalarında müvekkillerine en iyi hukuki desteği sunmayı taahhüt eder. <a href="https://uscalegal.av.tr/" target="blank" title="Ceza Hukuku Avukatı">Ceza hukuku avukatlarımız</a>, soruşturma aşamasından yargılama sürecine kadar yanınızda olup, haklarınızı korumak için en etkili çözümleri sunar.</p>

  <p>Detaylı bilgi almak ve ceza davalarında hukuki destek almak için bizimle iletişime geçin.</p>
</div>
`},
    { id: 3, header: 'İş ve Çalışma Hukuku', shortDescription: 'İşçi ve işveren haklarının korunmasına yönelik yasal danışmanlık hizmetleri.', content: `
      <div class="container my-5">
  <h2 class="text-center mb-4">İş ve Çalışma Hukuku | USCA Legal Hukuk ve Danışmanlık</h2>
  <p><strong>USCA Legal Hukuk ve Danışmanlık</strong>, İstanbul'da iş ve çalışma hukuku alanında uzmanlaşmış avukatlarıyla müvekkillerine kapsamlı hukuki destek sunmaktadır. İş hukuku, işçi ve işveren ilişkilerini düzenleyen, çalışma hayatındaki hak ve yükümlülükleri belirleyen önemli bir hukuk dalıdır. İş hukuku davalarında, işçilerin haklarını korumanın yanı sıra işverenlerin de hukuki süreçlerini yönetmekteyiz.</p>

  <div class="row my-4">
    <div class="col-md-12 mt-3">
      <h3>İş ve Çalışma Hukuku Nedir?</h3>
      <p>İş hukuku, işçi ve işveren arasındaki ilişkileri düzenleyen, iş sözleşmeleri, ücretler, çalışma koşulları, fazla mesai, iş kazaları ve işten çıkarma gibi konuları kapsayan bir hukuk dalıdır. <strong>USCA Legal</strong> olarak, iş hukuku kapsamındaki davalarda müvekkillerimize profesyonel hukuki danışmanlık sunarak, haklarını en iyi şekilde savunmalarına yardımcı oluyoruz.</p>
    </div>
    <div class="col-md-12 mt-3">
      <h3>Hangi İş Hukuku Davalarında Hizmet Veriyoruz?</h3>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>İşe İade Davaları:</strong> Haksız işten çıkarılma durumlarında işçilerin işe iade taleplerini savunuyoruz.</li>
        <li class="list-group-item"><strong>Fazla Mesai ve Ücret Davaları:</strong> İşçilerin fazla mesai ücretlerini alabilmeleri için gerekli hukuki süreçleri yönetiyoruz.</li>
        <li class="list-group-item"><strong>İş Kazaları ve Tazminat:</strong> İş kazaları sonrasında işçilerin tazminat haklarını koruyacak hukuki desteği sağlıyoruz.</li>
        <li class="list-group-item"><strong>Kıdem ve İhbar Tazminatı:</strong> İşçilerin kıdem ve ihbar tazminatı haklarını alabilmeleri için hukuki süreçleri yönetiyoruz.</li>
        <li class="list-group-item"><strong>Mobing ve Ayrımcılık Davaları:</strong> İş yerinde mobing ve ayrımcılığa uğrayan işçilerin haklarını koruyoruz.</li>
      </ul>
    </div>
  </div>

  <h3>İş Sözleşmeleri ve Çalışma Koşulları</h3>
  <p>İş sözleşmeleri, işçi ve işveren arasındaki temel ilişkiyi düzenleyen en önemli belgelerdir. Bu sözleşmeler, çalışma koşulları, ücretler, çalışma saatleri ve diğer hak ve yükümlülükleri belirler. <strong>USCA Legal</strong> olarak, iş sözleşmelerinin hazırlanması, revize edilmesi ve anlaşmazlıkların çözümü süreçlerinde hem işçilere hem de işverenlere hukuki destek sunuyoruz.</p>

  <h3>İş Kazaları ve Tazminat Süreci</h3>
  <p>İş kazaları, çalışma hayatında karşılaşılan en önemli sorunlardan biridir. İş kazaları sonucunda işçilerin maddi ve manevi tazminat hakları bulunmaktadır. <strong>USCA Legal</strong>, iş kazası mağdurlarının tazminat taleplerini savunarak, en iyi sonucu almalarına yardımcı olur.</p>

  <div class="alert alert-info my-4">
    <strong>Not:</strong> İş ve çalışma hukuku davaları, hem işçiler hem de işverenler açısından önemli hukuki süreçlerdir. Haklarınızı korumak için profesyonel bir avukat desteği almak büyük önem taşır.
  </div>

  <h3>İstanbul'da İş ve Çalışma Hukuku Avukatı</h3>
  <p><strong>USCA Legal Hukuk ve Danışmanlık</strong>, iş ve çalışma hukuku davalarında müvekkillerine kapsamlı hukuki destek sunmaktadır. İşe iade, fazla mesai, tazminat ve iş kazaları gibi konularda uzman avukatlarımız, her türlü hukuki süreci titizlikle yönetmektedir. Detaylı bilgi almak ve hukuki destek almak için <a href="https://uscalegal.av.tr/iletisim" target="blank">bizimle iletişime geçin</a>.</p>
</div>

      `},
    { id: 4, header: 'Emlak ve Gayrimenkul Hukuku', shortDescription: 'Gayrimenkul alım satım işlemleri, kiralama ve tapu davalarında uzman destek.', content: `
      <div class="container my-5">
  <h2 class="text-center mb-4">Emlak ve Gayrimenkul Hukuku | USCA Legal Hukuk ve Danışmanlık</h2>
  <p><strong>USCA Legal Hukuk ve Danışmanlık</strong>, İstanbul'da emlak ve gayrimenkul hukuku alanında uzmanlaşmış avukatlarıyla müvekkillerine kapsamlı hukuki destek sunmaktadır. Emlak ve gayrimenkul hukuku, taşınmazların alım, satım, kiralama ve ipotek işlemleri gibi çeşitli konuları kapsayan önemli bir hukuk dalıdır. Bu alanda yaşanan uyuşmazlıkların çözümü için deneyimli bir avukat desteği almak oldukça önemlidir.</p>

  <div class="row my-4">
    <div class="col-md-12 mt-3">
      <h3>Emlak ve Gayrimenkul Hukuku Nedir?</h3>
      <p><strong>Emlak ve gayrimenkul hukuku</strong>, taşınmaz malların (gayrimenkul) hukuki işlemlerini düzenleyen bir hukuk dalıdır. Alım-satım, kira sözleşmeleri, ipotek işlemleri ve gayrimenkulün devri gibi konularda hukuki destek sunan <strong>USCA Legal</strong>, müvekkillerinin haklarını korumak için çalışmaktadır.</p>
    </div>
    <div class="col-md-12 mt-3">
      <h3>Hizmet Verdiğimiz Emlak ve Gayrimenkul Hukuku Alanları</h3>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Alım-Satım İşlemleri:</strong> Gayrimenkul alım-satım işlemlerinin hukuka uygun bir şekilde gerçekleştirilmesi konusunda danışmanlık sağlıyoruz.</li>
        <li class="list-group-item"><strong>Kira Sözleşmeleri:</strong> Kira sözleşmelerinin hazırlanması ve uyuşmazlıkların çözümü süreçlerinde hukuki destek sunuyoruz.</li>
        <li class="list-group-item"><strong>İpotek İşlemleri:</strong> Gayrimenkullerin ipotek işlemlerinin yürütülmesi ve ipotekle ilgili uyuşmazlıkların çözümünde yardımcı oluyoruz.</li>
        <li class="list-group-item"><strong>Gayrimenkul Devri:</strong> Gayrimenkulün devri süreçlerinde müvekkillerimizin haklarını koruyoruz.</li>
        <li class="list-group-item"><strong>Kamulaştırma Davaları:</strong> Devletin kamulaştırma işlemlerinde müvekkillerimizin haklarını savunuyoruz.</li>
      </ul>
    </div>
  </div>

  <h3>Kira Sözleşmeleri ve Uyuşmazlıklar</h3>
  <p>Kira sözleşmeleri, kiracı ve kiraya veren arasındaki ilişkileri düzenleyen önemli belgelerdir. <strong>USCA Legal</strong>, kira sözleşmelerinin hazırlanması, revize edilmesi ve olası uyuşmazlıkların çözümü konularında hukuki destek sunmaktadır. Kiracıların haklarını korumak ve kiraya verenlerin yükümlülüklerini yerine getirmelerini sağlamak için çalışmaktayız.</p>

  <h3>Kamulaştırma Davaları</h3>
  <p>Kamulaştırma, devletin, özel mülkiyete tabi taşınmazların kamu yararı amacıyla el konulmasıdır. <strong>USCA Legal</strong>, kamulaştırma davalarında müvekkillerinin haklarını koruyarak, tazminat talepleri için hukuki destek sağlamaktadır.</p>

  <div class="alert alert-info my-4">
    <strong>Not:</strong> Emlak ve gayrimenkul hukuku, önemli hukuki süreçler içerir ve hukuki danışmanlık almak, haklarınızın korunması açısından hayati öneme sahiptir.
  </div>

  <h3>İstanbul'da Emlak ve Gayrimenkul Hukuku Avukatı</h3>
  <p><strong>USCA Legal Hukuk ve Danışmanlık</strong>, emlak ve gayrimenkul hukuku davalarında müvekkillerine profesyonel hukuki destek sunmaktadır. Alım-satım, kira, ipotek ve kamulaştırma gibi konularda uzman avukatlarımız, her türlü hukuki süreci titizlikle yönetmektedir. Detaylı bilgi almak ve hukuki destek almak için <a href="https://uscalegal.av.tr/iletisim" target="blank">bizimle iletişime geçin</a>.</p>
</div>

      `},
    { id: 5, header: 'Veri Güvenliği & KVKK', shortDescription: 'Kişisel verilerin korunması ve güvenliği konularında uzman hukuki danışmanlık.', content: `
      <div class="container my-5">
  <h2 class="text-center mb-4">Veri Güvenliği & KVKK | USCA Legal Hukuk ve Danışmanlık</h2>
  <p><strong>USCA Legal Hukuk ve Danışmanlık</strong>, veri güvenliği ve Kişisel Verilerin Korunması Kanunu (KVKK) konusunda uzmanlaşmış avukatlarıyla müvekkillerine kapsamlı hukuki destek sunmaktadır. Günümüzde, kişisel verilerin korunması ve veri güvenliği, hem bireyler hem de kurumlar için büyük önem taşımaktadır. KVKK, kişisel verilerin işlenmesi, saklanması ve korunmasına yönelik hukuki çerçeveyi belirlemektedir.</p>

  <div class="row my-4">
    <div class="col-md-12 mt-3">
      <h3>Veri Güvenliği Nedir?</h3>
      <p>Veri güvenliği, kişisel ve kurumsal verilerin yetkisiz erişim, kayıp, çalınma ve zarar görme gibi tehlikelerden korunması amacıyla alınan önlemlerdir. <strong>USCA Legal</strong>, veri güvenliği alanında hukuki danışmanlık sağlayarak, müvekkillerinin verilerini güvence altına almalarına yardımcı olmaktadır.</p>
    </div>
    <div class="col-md-12 mt-3">
      <h3>KVKK Nedir?</h3>
      <p>Kişisel Verilerin Korunması Kanunu (KVKK), kişisel verilerin işlenmesine ilişkin temel ilkeleri belirleyen bir mevzuattır. KVKK, kişisel verilerin toplanması, işlenmesi ve saklanması süreçlerini düzenleyerek bireylerin haklarını korumayı amaçlamaktadır.</p>
    </div>
  </div>

  <h3>Hizmet Verdiğimiz Veri Güvenliği ve KVKK Alanları</h3>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><strong>KVKK Uyum Danışmanlığı:</strong> Şirketlerin KVKK’ya uygunluk süreçlerinin yönetilmesi ve hukuki danışmanlık hizmeti sunulması.</li>
    <li class="list-group-item"><strong>Kişisel Veri İşleme Politikaları:</strong> Kişisel veri işleme politikalarının hazırlanması ve uygulanması konularında destek sağlanması.</li>
    <li class="list-group-item"><strong>Veri Güvenliği Eğitimleri:</strong> Şirket çalışanlarına yönelik veri güvenliği eğitimleri verilmesi.</li>
    <li class="list-group-item"><strong>Veri İhlali Yönetimi:</strong> Veri ihlali durumlarında hukuki süreçlerin yönetimi ve tazminat talepleri.</li>
    <li class="list-group-item"><strong>Veri Koruma Etkisi Değerlendirmesi:</strong> Yeni projelerde veri koruma etkisi değerlendirmelerinin yapılması.</li>
  </ul>

  <h3>KVKK Kapsamında Bireylerin Hakları</h3>
  <p>KVKK, bireylere birçok hak tanımaktadır. Bu haklar arasında kişisel verilere erişim, düzeltilme, silinme ve itiraz etme hakları bulunmaktadır. <strong>USCA Legal</strong>, müvekkillerinin KVKK kapsamında sahip oldukları hakları korumak ve hukuki süreçleri yönetmek konusunda destek sunmaktadır.</p>

  <div class="alert alert-info my-4">
    <strong>Not:</strong> Veri güvenliği ve KVKK, günümüzün dijital dünyasında kritik öneme sahiptir. Kişisel verilerinizi korumak ve hukuki süreçlerde destek almak için profesyonel bir avukatla çalışmanız önerilir.
  </div>

  <h3>İstanbul'da Veri Güvenliği ve KVKK Avukatı</h3>
  <p><strong>USCA Legal Hukuk ve Danışmanlık</strong>, veri güvenliği ve KVKK alanında müvekkillerine kapsamlı hukuki destek sunmaktadır. KVKK uyumu, veri güvenliği politikaları ve hukuki süreçlerin yönetimi konularında uzman avukatlarımızla sizin yanınızdayız. Detaylı bilgi almak ve hukuki destek almak için <a href="https://uscalegal.av.tr/iletisim" target="blank">bizimle iletişime geçin</a>.</p>
</div>

      `},
    { id: 6, header: 'Miras Hakları & Hukuki Süreçler', shortDescription: 'Miras paylaşımı ve hukuki süreçlerde uzman danışmanlık.', content: `
      
      <div class="container my-5">
  <h2 class="text-center mb-4">Miras Hakları & Hukuki Süreçler | USCA Legal Hukuk ve Danışmanlık</h2>
  <p><strong>USCA Legal Hukuk ve Danışmanlık</strong>, miras hukuku alanında uzmanlaşmış avukatlarıyla müvekkillerine kapsamlı hukuki destek sunmaktadır. Miras hukuku, bir kişinin ölümünden sonra mirasın paylaşımını ve mirasçıların haklarını düzenleyen önemli bir hukuk dalıdır. Miras hakları, bireylerin mirasçı olarak sahip oldukları yasal hakları kapsamaktadır.</p>

  <div class="row my-4">
    <div class="col-md-12 mt-3">
      <h3>Miras Hakları Nedir?</h3>
      <p><strong>Miras hakları</strong>, bir kişinin ölümünden sonra geride bıraktığı mal varlığının mirasçılar arasında nasıl paylaşılacağını belirleyen hukuki düzenlemelerdir. Her mirasçının, yasal miras oranlarına göre belirli hakları bulunmaktadır. <strong>USCA Legal</strong>, miras hakları konusunda müvekkillerine hukuki danışmanlık yaparak, haklarını korumalarına yardımcı olmaktadır.</p>
    </div>
    <div class="col-md-12 mt-3">
      <h3>Hukuki Süreçler</h3>
      <p>Miras hukuku kapsamındaki hukuki süreçler, mirasın intikali, mirasçılar arasında paylaşım ve itiraz süreçlerini içermektedir. <strong>USCA Legal</strong>, miras hukuku alanında hukuki süreçlerin her aşamasında müvekkillerine profesyonel destek sunmaktadır.</p>
    </div>
  </div>

  <h3>Miras Hukuku Kapsamında Verdiğimiz Hizmetler</h3>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><strong>Miras Sözleşmeleri:</strong> Miras sözleşmelerinin hazırlanması ve geçerliliği konusunda hukuki danışmanlık.</li>
    <li class="list-group-item"><strong>Mirasçılık Belgesi:</strong> Mirasçılık belgesinin alınması süreçlerinde destek sağlanması.</li>
    <li class="list-group-item"><strong>Miras Davaları:</strong> Miras davalarının açılması, takibi ve savunulması konusunda uzman avukat desteği.</li>
    <li class="list-group-item"><strong>Paylaşım Davaları:</strong> Mirasın paylaşımına yönelik davaların yürütülmesi ve müvekkillerin haklarının korunması.</li>
    <li class="list-group-item"><strong>İtiraz Süreçleri:</strong> Miras paylarına itiraz eden durumlarda hukuki destek sağlanması.</li>
  </ul>

  <h3>Miras Hukuku ve Mirasçının Hakları</h3>
  <p>Mirasçılar, miras bırakanın mal varlığına ilişkin çeşitli haklara sahiptir. Mirasın intikali, paylaşımı ve mirasın korunması gibi konularda <strong>USCA Legal</strong>, müvekkillerinin haklarını koruma amacıyla hukuki destek sunmaktadır.</p>

  <div class="alert alert-info my-4">
    <strong>Not:</strong> Miras hukuku, karmaşık hukuki süreçler içerebilir. Miras haklarınızı korumak ve hukuki süreçlerde destek almak için profesyonel bir avukattan yardım almanız önemlidir.
  </div>

  <h3>İstanbul'da Miras Hukuku Avukatı</h3>
  <p><strong>USCA Legal Hukuk ve Danışmanlık</strong>, miras hakları ve hukuki süreçler konusunda müvekkillerine kapsamlı hukuki destek sunmaktadır. Miras sözleşmeleri, mirasçılık belgeleri ve miras davaları gibi konularda uzman avukatlarımızla yanınızdayız. Detaylı bilgi almak ve hukuki destek almak için <a href="https://uscalegal.av.tr/iletisim" target="blank">bizimle iletişime geçin</a>.</p>
</div>
` }
  ];
  service : any = "";
  constructor(private router : Router) {}
  ngOnInit(): void {
    this.id = this.router.url.split("-").pop();
    this.service = this.services.find(q=> q.id == this.id);
  }



}
