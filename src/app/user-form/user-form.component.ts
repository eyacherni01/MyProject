import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  userForm!: FormGroup;
  ngOnInit(): void {

   this.userForm= new FormGroup ({
    email: new FormControl('',[Validators.required,Validators.email]),
    city : new FormControl('',Validators.required),

    })
  }
  get email(){return this.userForm.get('email');}
  get city(){return this.userForm.get('city');}
  
  adduser(){
    console.log(this.userForm.value.email);
  }
}
