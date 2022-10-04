import { Component, OnInit } from '@angular/core';
import { Commandes } from '../models/commandes';
import { CommandesService } from '../services/commandes.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  commades:Commandes[]=[];
  myCommades:Commandes[]=[];

  update = false

  view = false
  searchName:string=''

  myCmd:Commandes = {

    'id':0,
    'name':'',
    'poids':'',
    'price':''
  }

  constructor(private cmd : CommandesService) { }

  ngOnInit(): void {
    this.getComds();
  }


  changerView()
  {
    this.view = !this.view;
  }
getComds(){
  this.cmd.getCmds().subscribe((resp)=>{
    this.commades = this.myCommades = resp
  })

}

removeCmds(id:any){
  this.cmd.deleteCmd(id).subscribe(()=>{
    this.commades = this.commades.filter((resp)=> resp.id != id)
  })
}

addCmd(){
  this.cmd.addCmd(this.myCmd).subscribe((resp)=>{
    this.commades = [resp, ...this.commades]
  })
  this.videForms();
}

videForms(){
  this.myCmd = {

    'id':0,
    'name':'',
    'poids':'',
    'price':''
  }
}

editeCmd(cmd : Commandes)
{
  this.myCmd = cmd
  
  this.update=true
}

updateCmd(){
  this.cmd.updateCmd(this.myCmd).subscribe()
  this.videForms()
  this.update=false
}
search()
{
  this.commades = this.myCommades.filter((resp)=> resp.name.includes(this.searchName))

}
}
