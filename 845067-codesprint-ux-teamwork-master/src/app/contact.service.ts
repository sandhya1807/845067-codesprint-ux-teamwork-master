import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Contact } from './Model/contact';
import { Placeorder } from './placeorder';
const Requestheaders={headers:new HttpHeaders({
  'content-type':'applicatiom/json',
  
})}
@Injectable({
  providedIn: 'root'
})
export class ContactService {
ur:string="http://localhost:3000/place";
  constructor(private service:HttpClient) { 
}
public contact(contact:Contact){
  console.log(contact);
console.log("sfjs");
  return  this.service.post<Contact>(this.ur,JSON.stringify(contact));
  }
 public add(contact:Placeorder)
 {
   return this.service.post<Placeorder>(this.ur,contact);
 }
 public get()
 {
   return this.service.get<Placeorder>(this.ur);
 }
  
}
