import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormControl, FormGroup, Validators }  from '@angular/forms';

@Component({
  selector: 'app-employee-calculated-paye',
  templateUrl: './employee-calculated-paye.component.html',
  styleUrls: ['./employee-calculated-paye.component.css']
})
export class EmployeeCalculatedPayeComponent implements OnInit {
  taxForm: FormGroup;
  calcMonthlytax = "";
  calcAnnualtax = "";
  calctTax_Credits = "";
  calcPayeDue = "";
  calcNetCash = "";
  memberElements = [{ nameSurname: '' }];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.taxForm = new FormGroup({
      'taxYear': new FormControl('2020', [Validators.required, Validators.max(2021), Validators.min(2020)]),
      'age': new FormControl(null),
      'monthlyEarnings': new FormControl(null),
      'annualEarnings': new FormControl(null),
      'medicalMain': new FormControl(null),
      'members': new FormArray([])
    });
  }

  onCreatePost(taxDetails: { taxYear: number; age: string; monthlyEarnings: string; annualEarnings: string; memberElements: any; }) {
    // Send Http request

    //Validate input fields:


    JSON.stringify(this.taxForm.value);

    taxDetails.taxYear = this.taxForm.get('taxYear')?.value;
    taxDetails.monthlyEarnings = this.taxForm.get('monthlyEarnings')?.value;
    taxDetails.annualEarnings = this.taxForm.get('annualEarnings')?.value;
    taxDetails.memberElements = this.taxForm.get('members')?.value;
    taxDetails.age = this.taxForm.get('age')?.value;



    if (taxDetails.taxYear == 2021 || taxDetails.taxYear == 2020) {
      this.http.post<CalculatedPaye>("http://localhost:8080/addTaxDetails", taxDetails)
        .subscribe(responseData => {
          console.log(responseData);
          this.calcMonthlytax = "R" + responseData.monthlyTax;
          this.calcAnnualtax = "R" + responseData.annualTax;
          this.calctTax_Credits = "R" + responseData.taxCredits;
          this.calcPayeDue = "R" + responseData.payeDue;
          this.calcNetCash = "R" + responseData.netCash;
        });
    }
  }

  onAddMember() {
    const control = new FormControl('Please enter member name and surname here', Validators.required);
    (<FormArray>this.taxForm.get('members')).push(control);
  }

  getControls() {
    return (this.taxForm.get('members') as FormArray).controls;
  }

  // onMemberAdd(memberData: HTMLInputElement) {
  //   this.memberElements.push({
  //     nameSurname: memberData.value
  //   });
  //   memberData.value = "";
  // }

}


interface CalculatedPaye {
  monthlyTax: string;
  annualTax: string;
  taxCredits: string;
  payeDue: string;
  netCash: string;
}
