import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-adatok',
  templateUrl: './adatok.component.html',
  styleUrls: ['./adatok.component.css']
})
export class AdatokComponent {
  ekszerek:any
  oszlopok=["name", "description", "imageUrl"]
  ujEkszer:any={}
  
  constructor(private base:BaseService){
    this.base.getAll().subscribe(
      (res)=>this.ekszerek=res
    )

  }

  postEkszer(){
    this.base.postEkszer(this.ujEkszer).subscribe()
  }

  saveEkszer(ekszer:any){
    this.base.putEkszer(ekszer).subscribe()
  }
  deleteEkszer(ekszer:any){
    this.base.deleteEkszer(ekszer).subscribe()
  }

}
