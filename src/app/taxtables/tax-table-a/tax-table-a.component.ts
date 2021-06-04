import { Component, OnInit } from '@angular/core';
import { TaxTableA } from './tax-table-a';

@Component({
  selector: 'app-tax-table-a',
  templateUrl: './tax-table-a.component.html',
  styleUrls: ['./tax-table-a.component.css']
})
export class TaxTableAComponent implements OnInit {
  taxtableInfo: TaxTableA[] = [
    new TaxTableA("0 - 205900", "18% of taxable income"),
    new TaxTableA("205901 - 321600", "37 062 + 26% of taxable income above 205 900"),
    new TaxTableA("321 601 – 445 100", "67 144 + 31% of taxable income above 321 600"),
    new TaxTableA("445 101 – 584 200", "105 429 + 36% of taxable income above 445 100"),
    new TaxTableA("584 201 – 744 800", "155 505 + 39% of taxable income above 584 200"),
    new TaxTableA("744 801 – 1 577 300", "218 139 + 41% of taxable income above 744 800"),
    new TaxTableA("1 577 301 and above", "559 464 + 45% of taxable income above 1 577 300")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
