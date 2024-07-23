import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicateDataService {

  constructor() { }
  getmailData=[
    {Label:'Outgoing SMTTP Server' ,formControlName:"SMTTP", type:'email' ,class:'ms-2 mb-1 '},
    {Label:'Outgoing port' ,formControlName:"Port", type:'number',class:'ms-2 mb-1 '},
    {Label:'userName' ,formControlName:"userName", type:'text',class:'ms-2  mb-1 '},
    {Label:'password' ,formControlName:"password", type:'password',class:'ms-2 mb-1 '}
  ]
  getSmsData=[
    {Label:'NPl' ,formControlName:"NPl", type:'number' ,class:'ms-2 mb-1 '},
    {Label:'TON' ,formControlName:"TON", type:'string',class:'ms-2 mb-1 '},
    {Label:'Source Address' ,formControlName:"Address", type:'string',class:'ms-2 mb-1 '},
    {Label:'Host Ip' ,formControlName:"Host", type:'number',class:'ms-2 mb-1 '},
    {Label:'Port' ,formControlName:"Port", type:'number',class:'ms-2 mb-1 '},
    {Label:'userName' ,formControlName:"userName", type:'text',class:'ms-2  mb-1 '},
    {Label:'password' ,formControlName:"password", type:'password',class:'ms-2 mb-1 '}
  ]
 

}
