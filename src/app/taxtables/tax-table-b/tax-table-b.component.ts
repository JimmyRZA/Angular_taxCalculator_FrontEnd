import { Component, OnInit } from '@angular/core';
import {  TaxTableB } from './tax-table-b';

@Component({
  selector: 'app-tax-table-b',
  templateUrl: './tax-table-b.component.html',
  styleUrls: ['./tax-table-b.component.css']
})
export class TaxTableBComponent implements OnInit {
  taxtableBInfo: TaxTableB[] = [
    new TaxTableB("0 – 195 850", "18% of taxable income"),
    new TaxTableB("195 851 – 305 850", "35 253 + 26% of taxable income above 195 850"),
    new TaxTableB("305 851 – 423 300", "63 853 + 31% of taxable income above 305 850"),
    new TaxTableB("423 301 – 555 600", "100 263 + 36% of taxable income above 423 300"),
    new TaxTableB("555 601 – 708 310", "147 891 + 39% of taxable income above 555 600"),
    new TaxTableB("708 311 – 1 500 000", "207 448 + 41% of taxable income above 708 310"),
    new TaxTableB("1 500 001 and above", "532 041 + 45% of taxable income above 1 500 000")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
