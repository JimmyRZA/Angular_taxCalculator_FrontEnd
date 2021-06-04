import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-calculated-paye',
  templateUrl: './employee-calculated-paye.component.html',
  styleUrls: ['./employee-calculated-paye.component.css']
})
export class EmployeeCalculatedPayeComponent implements OnInit {
  calcMonthlytax = "";
  calcAnnualtax = "";
  calctTax_Credits = "";
  calcPayeDue = "";
  calcNetCash = "";

  //TODO Date Picker fields for tax year
  // minDate = new Date(1985, 4, 12); 
  // maxDate = new Date(1985, 4, 22);
  // @Input()
  // picker!: string;
  // @Input()
  // matDatepicker!: Date;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onCreatePost(taxDetails: { taxYear: string; age: string; monthlyEarnings: string; annualEarnings: string; medicalMain: string;}) {
    // Send Http request
    this.http.post<CalculatedPaye>("http://localhost:8080/addTaxDetails", taxDetails)
    .subscribe(responseData => {
      console.log(responseData);
      this.calcMonthlytax = "R" +responseData.monthlyTax;
      this.calcAnnualtax = "R"+responseData.annualTax;
      this.calctTax_Credits = "R" +responseData.taxCredits;
      this.calcPayeDue = "R" +responseData.payeDue;
      this.calcNetCash = "R" +responseData.netCash;
    });
  }
}


interface CalculatedPaye {
  monthlyTax: string;
  annualTax: string;
  taxCredits: string;
  payeDue: string;
  netCash: string;
}
