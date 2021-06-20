import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  tickets=[
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
  }
];

  constructor(private backendservice: BackendService) { }

  ngOnInit(): void {
    this.tickets=this.backendservice.tickets;
  }

}
