import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private BASE_PATH:string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  public post<T>(target:string, body:any) {
      return this.httpClient.post<T>(this.BASE_PATH+target, body);
  }

  public get<T>(target:string) {
      return this.httpClient.get<T>(this.BASE_PATH+target);
  }

}