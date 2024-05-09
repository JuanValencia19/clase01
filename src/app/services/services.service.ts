import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL="https://api.escuelajs.co/api/v1/products"

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  getAllCharacters(){
    return this.http.get(URL);
  }

  createCharacter(newCharacter: any){
    console.log(newCharacter);
    return this.http.post(URL, newCharacter);
  }

  deleteProduct(id:number){
    // Asegúrate de incluir el ID en la URL para eliminar el producto específico
    return this.http.delete(`${URL}/${id}`);
  }
}

  
