import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  constructor(private http: HttpClient) { }

  async ngOnInit(): Promise<void> {
    await this.getBlogList();
  }

  async getBlogList() {    
    this.loading = true;     
    const result = await firstValueFrom(this.http.get<any>(this.apiUrl + "/Blog/GetBlogList"));
    this.loading = false; 
    this.blogList = result.resultObject;
    console.log("İstek başarılı, sonuç: ", result);
    
  }
}
