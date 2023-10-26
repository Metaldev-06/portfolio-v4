import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@src/environments/environment.development';
import { Observable } from 'rxjs';
import { PostData } from '../../interfaces/post-data/post-data';
import { CourseData } from '../../interfaces/course-data/course-data';

@Injectable({
  providedIn: 'root',
})
export class BlogDataService {
  private readonly apiUrl = environment.apiUrl;
  private readonly apiUrlYoutube = environment.apiUrlYoutube;

  private readonly http = inject(HttpClient);

  private getCommonParams(): HttpParams {
    return new HttpParams()
      .set('fields[0]', 'title')
      .set('fields[1]', 'slug')
      .set('fields[2]', 'description')
      .set('fields[3]', 'technology')
      .set('fields[4]', 'publishedAt')
      .set('populate[image][fields][5]', 'formats');
  }

  getPosts(): Observable<PostData> {
    const params = this.getCommonParams();

    return this.http.get<PostData>(`${this.apiUrl}/posts`, { params });
  }

  getPostBySlug(slug: string): Observable<PostData> {
    const params = new HttpParams()
      .set('populate', '*')
      .set('filters[slug][$eq]', slug);

    return this.http.get<PostData>(`${this.apiUrl}/posts`, { params });
  }

  getLatestPosts(): Observable<PostData> {
    const params = this.getCommonParams()
      .set('sort', 'createdAt:desc')
      .set('pagination[limit]', '3');

    return this.http.get<PostData>(`${this.apiUrl}/posts`, { params });
  }

  getCoursesByYoutube(): Observable<CourseData> {
    const params = new HttpParams()
      .set('key', 'AIzaSyC0XqLWPPEplpA4bkmmVG6M-t02Jz9d_o4')
      .set('channelId', 'UCp4yKcVtJW91gj8pC3MVtng')
      .set('part', 'snippet');
    return this.http.get<CourseData>(`${this.apiUrlYoutube}/search`, {
      params,
    });
  }
}
