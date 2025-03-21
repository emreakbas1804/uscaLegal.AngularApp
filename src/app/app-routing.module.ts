import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './Home/index/index.component';
import { ContactComponent } from './Home/contact/contact.component';
import { AboutUsComponent } from './Home/about-us/about-us.component';
import { ServicesComponent } from './Home/services/services.component';
import { ServiceDetailComponent } from './Home/service-detail/service-detail.component';
import { FaqComponent } from './Home/faq/faq.component';
import { BlogsComponent } from './Home/blogs/blogs.component';
import { BlogDetailComponent } from './Home/blog-detail/blog-detail.component';

const routes: Routes = [
  {path : "", component : IndexComponent},
  {path : "iletisim", component : ContactComponent},
  {path : "hakkimizda", component : AboutUsComponent},
  {path : "makaleler", component : BlogsComponent},
  {path : "makaleler/:id:", component : BlogDetailComponent},
  {path : "hizmetlerimiz", component : ServicesComponent},
  {path : "hizmetlerimiz/:id:", component : ServiceDetailComponent},
  {path : "sikca-sorulan-sorular", component : FaqComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
