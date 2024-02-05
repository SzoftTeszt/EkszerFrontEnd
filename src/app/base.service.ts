import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url="https://localhost:7206/api/Ekszerek/"
  constructor(private http:HttpClient) {

   }

   getAll(){
    return this.http.get(this.url)
   }

   postEkszer(body:any){
    return this.http.post(this.url,body)
   }

   putEkszer(body:any){
    return this.http.put(this.url+body.id, body)
   }
   
   deleteEkszer(body:any){
    return this.http.delete(this.url+body.id)
   }
}
