import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Placeorder } from '../placeorder';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})
export class VieworderComponent implements OnInit {
list:Placeorder;
  constructor(private service:ContactService) {
  this.get();
   }

  ngOnInit() {
  }
get(){
  this.service.get().subscribe(res=>this.list=res)
}
}
