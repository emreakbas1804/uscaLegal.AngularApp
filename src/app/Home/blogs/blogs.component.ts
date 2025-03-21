import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  loading: boolean = false;
  blogList : any = [];
  apiUrl = environment.apiUrl;
  cdnUrl = environment.cdnUrl;
  searchKeyword : any;
constructor(private http: HttpClient,private router : Router,private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.route.queryParamMap.subscribe(params => {
      this.searchKeyword = params.get('search') || '';  // Parametreyi al ve boşsa '' ata
      console.log(this.searchKeyword);  // Console'da kontrol et
    }); 
    await this.getBlogList();
  }

  async onSearchChange(): Promise<void> {
    this.router.navigate([], {
      queryParams: { search: this.searchKeyword },
      queryParamsHandling: 'merge', // Mevcut query parametreleri korur
    });
    await this.getBlogList(); // Blog listesini yeniden yükle
  }

  async getBlogList() {    
    this.loading = true;  
    let params = new HttpParams();
    if (this.searchKeyword) {
      params = params.set('keyword', this.searchKeyword);
    }   
    const result = await firstValueFrom(this.http.get<any>(this.apiUrl + "/Blog/GetBlogList",{ params }));
    this.loading = false; 
    this.blogList = result.resultObject;
    console.log("İstek başarılı, sonuç: ", result);
    
  }
}
