import { Component, forwardRef, OnInit } from '@angular/core';
import {  FormControl} from '@angular/forms';
import { DataLanguageService } from './../../../serves/data-language.service';
import { ControlContainer, FormGroup, FormBuilder, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
DataLanguageService

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LanguageComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LanguageComponent),
      multi: true
    }
  ]
})
export class LanguageComponent implements OnInit {
  form !: FormGroup;
  listItem=this._dataLanguageService.listOfItems;
  Primary:any

  constructor(
   private fb: FormBuilder,private controlContainer: ControlContainer,
   private _dataLanguageService: DataLanguageService
 ){}

  ngOnInit(): void {
    this.form = this.fb.group({
      AvailableLanguages:[''],
      PrimaryLanguage:[''],
      SecondaryLanguage:[''],
      
    });
    const parentForm = this.controlContainer.control as FormGroup;
    parentForm.addControl('Language', this.form);

  }
  
  onSubmit(){
    console.log(this.form.value)
  }

  changeValue(event:any){
    console.log(event);
    this.form.patchValue({
      PrimaryLanguage:event[0].id
    })
    this.Primary=event
    }

   
    
  }
    




