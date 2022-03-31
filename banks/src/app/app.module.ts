import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BankDetailComponent } from './bank-detail/bank-detail.component';
import { BanksComponent } from './banks/banks.component';

@NgModule({
  declarations: [
    AppComponent,
    BanksComponent,
    BankDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
