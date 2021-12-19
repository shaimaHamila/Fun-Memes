import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemesService {

  constructor(private http: HttpClient) { }

  getMemes(){
    return this.http.get('https://api.imgflip.com/get_memes');
  }
}


