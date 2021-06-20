import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  baseURL: string="https://dev.onebanc.ai/assignment.asmx/GetTransactionHistory"
  tickets=[];
  constructor(private http: HttpClient) { }

  getTransactions(userId:number,recipientId:number): Observable<any>{
    return this.http.get(this.baseURL+"?userId="+userId+"&recipientId="+recipientId)
  }
 
  setTicketData(data:any){
    this.tickets=data;
  }
  gettickets(n:number){
    return this.tickets[n];
  }
}
