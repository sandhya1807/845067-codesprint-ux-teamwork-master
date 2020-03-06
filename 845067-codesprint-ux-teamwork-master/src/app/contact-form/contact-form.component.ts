import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Contact } from '../Model/contact';
import {HttpClient} from '@angular/common/http';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
contactForm:FormGroup;
submitted:boolean=false;
  contact:Contact;
  constructor(private builder:FormBuilder,private service:ContactService) {
    
  }

  ngOnInit() {
    this.contactForm=this.builder.group({
      Fullname:['',[Validators.required]],
      Email:['',[Validators.required,Validators.email]],
      Message:['',[Validators.required]]
    })
  }
  onSubmit(){
   
    if(this.contactForm.valid){
      this.submitted=true;
      this.getcontact();
    }
  }
  onReset() {
    this.submitted = false;
    this.contactForm.reset();
}
get f(){
  return this.contactForm.controls
}
getcontact(){
  this.contact=new Contact();
  this.contact.Fullname=this.contactForm.value['Fullname'];
 this.contact.Email=this.contactForm.value['Email'];
 this.contact.Message=this.contactForm.value['Message']
 console.log(this.contact);
 this.service.contact(this.contact).subscribe(res=>{
   console.log("record added");
 
 alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm.value, null, 4));
})
}
}
