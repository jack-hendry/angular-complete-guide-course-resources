import { Component, input } from '@angular/core';
import { CalcType } from '../shared/calc.model';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  results = input<CalcType[]>();
}
