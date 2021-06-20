import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BackendService } from '../backend.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  
  userInfo = new FormGroup({
    userId: new FormControl('',[Validators.required]),
    recipientId: new FormControl('',[Validators.required]),
  });

  constructor(private backendServices :BackendService,private router:Router) { }

  ngOnInit(): void {
  }

  tickets=[];

  getData(){
    this.backendServices.getTransactions(this.userInfo.value.userId,this.userInfo.value.recipientId).subscribe(
      (data : any)=>{
        this.tickets=data.transactions
        this.backendServices.setTicketData(this.tickets);
        this.router.navigate(['history']);
      }
    ); 
  }

}
