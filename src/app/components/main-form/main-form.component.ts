import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent {
  mainForm:FormGroup
  constructor(private fb:FormBuilder){

    this.mainForm = this.fb.group({

    })


  }

  onSubmit(){
    console.log(this.mainForm.value)
  }
  reset(){
    this.mainForm.reset()
  }
  
  

}
