import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AtriskService {

  constructor(private http:HttpClient) { }
  public GetAtriskHistory(){
    
    return this.http.get("https://evd.apigateway.slb.com/getstarted");
  }
}