import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // Замените этот URL на фактический endpoint вашего API
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private http: HttpClient) { }

  // Предполагаем, что API возвращает массив объектов постов
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.postsUrl);
  }
}
