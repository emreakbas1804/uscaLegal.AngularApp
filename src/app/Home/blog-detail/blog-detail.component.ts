import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  loading: boolean = false;
  blogDetail : any = [];
  blogList : any = [];
  apiUrl = environment.apiUrl;
  cdnUrl = environment.cdnUrl;
  blogId  : any;
  constructor(private http: HttpClient,private router : Router) { }

  async ngOnInit(): Promise<void> {
    this.blogId = this.router.url.split("-").pop();
      await this.getBlogDetail();
      await this.getLastThreeBlogList();
    }
  
    async getBlogDetail() {
      this.loading = true;      
      const params = new HttpParams().set('blogId', this.blogId);
  
      const result = await firstValueFrom(this.http.get<any>(`${this.apiUrl}/Blog/GetBlogWithDetail`, { params }));
      this.loading = false;
      this.blogDetail = result.resultObject;
      console.log("İstek başarılı, sonuç: ", result);
      
    }

    async getLastThreeBlogList() {    
      this.loading = true;     
      const params = new HttpParams().set('blogId', this.blogId);
  
      const result = await firstValueFrom(this.http.get<any>(this.apiUrl + "/Blog/GetLastThreeBlogList",{ params }));
      this.loading = false; 
      this.blogList = result.resultObject;
      console.log("İstek başarılı, sonuç: ", result);
      
    }

}
