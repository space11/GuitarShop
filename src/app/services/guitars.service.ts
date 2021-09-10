import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const ENDPOINT = 'http://localhost:4000/guitars';

@Injectable({
  providedIn: 'root'
})
export class GuitarsService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(ENDPOINT);
  }
}
