import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicDataService {

  constructor() { }
  getBasicData=[
    {Label:'Block the user After' ,text:'Faild Attempts' , class:'ms-2 mt-4 text-secondary' ,formControlName:"FaildAttempts"},
    {Label:'Password Minimum Length' ,text:'Characters', class:'ms-2 mt-4 text-secondary',formControlName:"Characters"},
    {Label:'Password Expires After' ,text:'Days', class:'ms-2 mt-4 text-secondary',formControlName:"Days"},
  ]
  getBasicLeftData=[
    {Label:'Accept Repeating password After' ,text:'times' , class:'ms-2 mt-4 text-secondary',formControlName:"times"},
    {Label:'Password Manimum Length' ,text:'Characters', class:'ms-2 mt-4 text-secondary',formControlName:"Manimum"},

  ]
  getLdapData=[
    {Label:'Host' ,formControlName:"Host", type:'text'},
    {Label:'Port' ,formControlName:"Port", type:'text'},
    {Label:'Base' ,formControlName:"Base", type:'text'},
    {Label:'userName' ,formControlName:"userName", type:'text'},
    {Label:'password' ,formControlName:"Manimum", type:'password'}
  ]
  getCheckBoxData=[
    {Label:'Should Contain Special Character' ,formControlName:"Contain",id:"Contain"},
    {Label:'Prevent white Space' ,formControlName:"Space",id:"Space"},
    {Label:'Prevent Key board Sequence      (EX:Qwerty)' ,formControlName:"Sequence",id:"Sequence"},
    {Label:'Prevent login ID' ,formControlName:"login",id:"login"},
    {Label:'Prevent userName' ,formControlName:"name",id:"name"},
    {Label:'Prevent email' ,formControlName:"email",id:"email"},
    {Label:'Validate Sequence       (EX: Abcd)' ,formControlName:"Validate",id:"Validate"}
    
  ]
}
