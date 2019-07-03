import { Component, OnInit } from '@angular/core';
import { AtRiskHistory } from '../../Models/at-risk-history.model';
import {AtriskService} from '../../services/atrisk.service'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-atrisk-history',
  templateUrl: './atrisk-history.component.html',
  //styleUrls: ['./atrisk-history.component.css'],
  moduleId: module.id,
})
export class AtriskHistoryComponent implements OnInit {
  
 public totalResultsCount = 100;
 public perPageResultscount = 12;
 public refreshPagination = false;
  //private AtrisHistoryData : Observable<AtRiskHistory[]> ;




 public showCheckBox = false;
 public stubTableContent : AtRiskHistory[] = [];
 public tableConfig = { pageSize: 10, showLineBreak: false, showCheckBox: true};



  constructor(private atriskSer:AtriskService) { 
    
  }

  ngOnInit() {
    this.atriskSer.GetAtriskHistory().subscribe((res : AtRiskHistory[])=>{
      this.stubTableContent = res;
      });
  }

}
