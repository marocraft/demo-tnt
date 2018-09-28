import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {environment} from   '../../../environments/environment'

@Injectable()
export class BeerService {
  private API_URL= environment.API_URL;
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.API_URL+'/good-beers');
  }
}