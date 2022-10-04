import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commandes } from '../models/commandes';

@Injectable({
  providedIn: 'root'
})
export class CommandesService {
  httpBase="http://localhost:5000/commandes";

  constructor(private http:HttpClient) { }

  getCmds(){
    return this.http.get<Commandes[]>(this.httpBase)
  }

  deleteCmd(id:number){
    return this.http.delete(`${this.httpBase}/${id}`)
  }

  addCmd(cmd : Commandes){
    return this.http.post<Commandes>(this.httpBase, cmd)
  }

  updateCmd(cmd : Commandes){
    return this.http.put(`${this.httpBase}/${cmd.id}`,cmd)
  }
}
