import { Component, forwardRef } from '@angular/core';
import { CommunicateDataService } from './../../../serves/communicate-data.service';
import { ControlContainer, FormGroup, FormBuilder, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';


@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MailComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MailComponent),
      multi: true
    }
  ]
})
export class MailComponent {
  dataMail=this._communicateDataService.getmailData

  MailForm!:FormGroup
  constructor(private _communicateDataService:CommunicateDataService ,
    private fb: FormBuilder, private ControlContainer: ControlContainer,
  ){}

  ngOnInit(): void {
    this.MailForm= this.fb.group({
      SMTTP:['smtp.emailsrvr.com'],
      Port:['587'],
      userName:['noreply@KN-it.com'],
      password:['123456']
      
    });
    const parentForm = this.ControlContainer.control as FormGroup;
    parentForm.addControl('Mail', this.MailForm);

  }
  onSubmit(){
    console.log(this.MailForm.value)
  }


}
