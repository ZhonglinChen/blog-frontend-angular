import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IBlog } from '../_models/IBlog';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  baseUrl = environment.apiURL + 'blogs/';
  constructor(private http: HttpClient) { }

  getBlogs(): Observable<IBlog[]> {

    return this.http.get<IBlog[]>(this.baseUrl);
  }

  getBlog(id: number): Observable<IBlog> {

    return this.http.get<IBlog>(this.baseUrl + id);
  }

  addBlog(blog: IBlog) {
    return this.http.post(this.baseUrl + 'add', blog);
  }

  deleteBlog(id: number) {

    return this.http.delete(this.baseUrl + id);
  }

  updateBlog(blog: IBlog) {
    console.log('BlogService update Blog')
    return this.http.put(this.baseUrl, blog);
  }


}
