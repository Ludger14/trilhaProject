import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  url = "http://localhost:8080/usuario"

  constructor(private http: HttpClient) { }
  
  putUsuario(id, dados){
    return this.http.put(`${this.url}/${id}`, dados);
  }

  getCurrentUser(id){
    return this.http.get(`${this.url}/${id}`);
  }
}
