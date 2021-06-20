import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { TransdetailsComponent } from './transdetails/transdetails.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [

  { path: '', component: UserdetailsComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'history/transaction', component: TransdetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
