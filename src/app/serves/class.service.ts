import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  form:any

  constructor() { }
  divBtn='d-flex justify-content-end';
  btnLanguage=[
    {name:'Save',class:'btn btn-success me-3 ps-5 pe-5'},
    
  ]
}
