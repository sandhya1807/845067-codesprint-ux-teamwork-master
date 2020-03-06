import { Component, OnInit, ViewChild } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Placeorder } from '../placeorder';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {

  show: false;
  name:string;
PlaceForm:FormGroup;
submitted=false;
place:Placeorder;
  constructor(private formbuild:FormBuilder,private service:ContactService) { 

  }

  ngOnInit() {
   this.PlaceForm= this.formbuild.group({
    Inr: ['',[Validators.required,Validators.pattern('^[0-9]{1,8}$')]],
      Paisa:['',[Validators.required,Validators.pattern('^[0-99]{1,2}$')]],
      Firstname:['',[Validators.required,Validators.pattern('^[a-zA-Z]{5,20}$')]],
      Lastname:['',[Validators.required,Validators.pattern('^[a-zA-Z]{5,20}$')]],
      Street:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9-:]{3,30}$')]],
      City:['',[Validators.required,Validators.pattern('^[a-zA-Z]{3,30}$')]],
      State:['',[Validators.required,Validators.pattern('^[a-zA-Z]{3,30}$')]],
      Pincode:['',[Validators.required,Validators.pattern('^[0-9]{6}$')]],
      Bfirstname:['',[Validators.required,Validators.pattern('^[a-zA-Z]{5,20}$')]],
      Blastname:['',[Validators.required,Validators.pattern('^[a-zA-Z]{5,20}$')]],
      Email: ['', [Validators.required,Validators.email]],
      Country:['',Validators.required],
      Mobileno:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
    })
  }
  get f()
  {
    return this.PlaceForm.controls;
  }
 
  onsubmit()
  {
  this.submitted=true;
  if(this.PlaceForm.valid)
  {
    this.Add();
  }}
  Add(){
    this.place=new Placeorder();
    this.place.Id=Math.floor(Math.random()*1000);
    this.place.Inr=this.PlaceForm.value["Inr"];
    this.place.Paisa=this.PlaceForm.value["Paisa"];
    this.place.Firstname=this.PlaceForm.value["Firstname"]+this.PlaceForm.value["Lastname"];
    this.place.State=this.PlaceForm.value["State"];
    this.place.Street=this.PlaceForm.value["Street"];
    this.place.Country=this.PlaceForm.value["Country"];
    this.place.Pincode=this.PlaceForm.value["Pincode"];
    this.place.Email=this.PlaceForm.value["Email"];
    this.place.Bfirstname=this.PlaceForm.value["Bfirstname"]+this.PlaceForm.value["Blastname"];
    this.place.City=this.PlaceForm.value["City"];
    this.place.Mobile=this.PlaceForm.value["Mobileno"];
    console.log(this.place)
    this.service.add(this.place).subscribe(res=>{
      alert("orderd successfully")
      },
    err=>{
      console.log(err);
    });

  }
  onreset(){
    this.submitted=false;
    
  }
}



