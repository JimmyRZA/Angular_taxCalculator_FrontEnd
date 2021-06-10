import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeCalculatedPayeComponent } from './employee-calculated-paye/employee-calculated-paye.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaxTableAComponent } from './taxtables/tax-table-a/tax-table-a.component';
import { TaxTableBComponent } from './taxtables/tax-table-b/tax-table-b.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCalculatedPayeComponent,
    TaxTableAComponent,
    TaxTableBComponent
  ],
  imports: [
    BrowserModule,
    //  FormsModule, 
    ReactiveFormsModule,
    HttpClientModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
