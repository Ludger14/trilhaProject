import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  url = "http://localhost:8080/usuario"
  constructor(private http: HttpClient) { }

  getUsuario(){
    return this.http.get(this.url, {responseType: 'json'});
  }
  
  onDelete(id){
    return this.http.delete(`${this.url}/${id}`);
  }
}
