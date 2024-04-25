import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL="https://rickandmortyapi.com/api/character"

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  getAllCharacters(){
    return this.http.get(URL);
  }
}
