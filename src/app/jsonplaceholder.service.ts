import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Client} from "./domaine/Client";
import {Post} from "./domaine/post";

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  private url: string = "https://jsonplaceholder.typicode.com/"

  constructor(private http: HttpClient) { }

  getAll(): Promise<Array<Post>>{
    return this.http.get(this.url+'posts').toPromise().then(r=>r as Array<Post>)
  }
}
