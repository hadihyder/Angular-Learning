import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositComponent } from './deposit/deposit.component';
import { LoginComponent } from './login/login.component';
import { OptionsComponent } from './options/options.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'options', component:OptionsComponent},
  {path:'options/withdraw', component:WithdrawComponent},
  {path:'options/deposit', component:DepositComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
