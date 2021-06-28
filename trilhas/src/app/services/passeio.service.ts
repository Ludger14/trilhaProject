import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PasseioService {  

  alert: boolean = false;
  alertD: boolean = false;

  selectedFile: File = null;  

  url = "http://localhost:8080/passeio"
  constructor(private http: HttpClient) { }

  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
  }

  getPasseio(){
    return this.http.get(this.url, {responseType: 'json'});
  }
  putPasseio(id, dados){
    return this.http.put(`${this.url}/${id}`, dados);
  }

  getCurrentPasseio(id){
    return this.http.get(`${this.url}/${id}`);
  }
  
  postPasseio(dados){
    return this.http.post(this.url, dados);    
  }

  onDelete(id){
    return this.http.delete(`${this.url}/${id}`);
  }

}
