import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-transdetails',
  templateUrl: './transdetails.component.html',
  styleUrls: ['./transdetails.component.css']
})
export class TransdetailsComponent implements OnInit {
  id=0;
  ticket=
  {
    "id": 0,
    "startDate": "",
    "endDate": "",
    "amount": 0,
    "direction": 0,
    "type": 1,
    "status": 1,
    "description": "",
    "customer": {
      "vPayId": 0,
      "vPay": ""
    },
    "partner": {
      "vPayId": 1,
      "vPay": ""
    }
  };

  constructor(private backendservice: BackendService) { }

  ngOnInit(): void {
    this.ticket=this.backendservice.gettickets(this.id);
  }
}
