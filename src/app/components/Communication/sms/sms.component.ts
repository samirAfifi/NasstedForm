import { Component, forwardRef } from '@angular/core';
import { CommunicateDataService } from './../../../serves/communicate-data.service';
import { ControlContainer, FormGroup, FormBuilder, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SmsComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SmsComponent),
      multi: true
    }
  ]
})
export class SmsComponent {
  dataSms=this._communicateDataService.getSmsData

  SMSForm!:FormGroup
  constructor(private _communicateDataService:CommunicateDataService ,
    private fb: FormBuilder, private ControlContainer: ControlContainer,
  ){}

  ngOnInit(): void {
    this.SMSForm= this.fb.group({
      NPl:['123'],
      TON:['SMSTON'],
      Address:['Source Address'],
      Host:['192.168.3.114'],
      Port:['900'],
      userName:['KN'],
      password:['123456']
      
    });
    const parentForm = this.ControlContainer.control as FormGroup;
    parentForm.addControl('SMS', this.SMSForm);

  }
  onSubmit(){
    console.log(this.SMSForm.value)
  }

}
