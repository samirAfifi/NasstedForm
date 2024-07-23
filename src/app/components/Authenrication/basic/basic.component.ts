import { Component, forwardRef } from '@angular/core';
import { BasicDataService } from './../../../serves/basic-data.service';
import { ControlContainer, FormGroup, FormBuilder, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { DataLanguageService } from './../../../serves/data-language.service';


@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BasicComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => BasicComponent),
      multi: true
    }
  ]
})
export class BasicComponent {
  listItem=this._dataLanguageService.listOfItems;

  basicForm !:FormGroup

  basicData=this._basicDataService.getBasicData;
  basicLeftData=this._basicDataService.getBasicLeftData;
  checkData=this._basicDataService.getCheckBoxData

  constructor(private _basicDataService:BasicDataService,
    private fb: FormBuilder, private ControlContainer: ControlContainer,
    private _dataLanguageService: DataLanguageService
  ){}

  ngOnInit(): void {
    this.basicForm = this.fb.group({
      FaildAttempts:['3'],
      Characters:['8'],
      Days:['90'],
      times:['5'],
      Manimum:['20'],
      Digits:[''],
      Character:[''],
      Contain:[''],
      Space:[''],
      Sequence:[''],
      login:[''],
      name:[''],
      email:[''],
      Validate:['']

     
      
    });
    const parentForm = this.ControlContainer.control as FormGroup;
    parentForm.addControl('basic', this.basicForm);

  }
  onSubmit(){
    console.log(this.basicForm.value)
  }


}
