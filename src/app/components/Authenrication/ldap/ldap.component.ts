import { Component, forwardRef } from '@angular/core';
import { BasicDataService } from './../../../serves/basic-data.service';
import { ControlContainer, FormGroup, FormBuilder, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';


BasicDataService

@Component({
  selector: 'app-ldap',
  templateUrl: './ldap.component.html',
  styleUrls: ['./ldap.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LdapComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LdapComponent),
      multi: true
    }
  ]
})
export class LdapComponent {
  ldapData=this._basicDataService.getLdapData
  LdapForm!:FormGroup
  constructor(private _basicDataService:BasicDataService,
    private fb: FormBuilder, private ControlContainer: ControlContainer,
  ){}

  ngOnInit(): void {
    this.LdapForm= this.fb.group({
      Host:[''],
      Port:[''],
      Base:[''],
      userName:[''],
      Manimum:['']
      
    });
    const parentForm = this.ControlContainer.control as FormGroup;
    parentForm.addControl('Ldap', this.LdapForm);

  }
  onSubmit(){
    console.log(this.LdapForm.value)
  }

}
