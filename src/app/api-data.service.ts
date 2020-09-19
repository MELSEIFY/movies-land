import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  constructor(private _HttpClient: HttpClient) {

   }

   getMovies():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=71edfe51fc01a6ea3e62395cdb5b376f&language=en-US&page=1`)
  }

  getPeople():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/popular?api_key=71edfe51fc01a6ea3e62395cdb5b376f&language=en-US&page=1`)
  }

  getTv():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/popular?api_key=71edfe51fc01a6ea3e62395cdb5b376f&language=en-US&page=1`)
  }



}
