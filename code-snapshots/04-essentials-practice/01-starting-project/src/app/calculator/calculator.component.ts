import { Component,  output,  signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { } from '../investment-results.service';
import {  UserInput } from '../shared/calc.model';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  calculation = output<UserInput>();
  initialInvestment = signal(0)
  anualInvestment = signal(0)
  expectedReturn = signal(5)
  duration = signal(10)

  // constructor(private investmentCalc: InvestmentResultsService) {}

  onSubmit() {
    // let tmp = this.investmentCalc.calculateInvestmentResults(
    let tmp : UserInput = {
      initialInvestment: this.initialInvestment(),
      anualInvestment: this.anualInvestment(),
      expectedReturn: this.expectedReturn(),
      duration: this.duration()
    }
    // );
    this.calculation.emit(tmp);

    console.log(tmp);
  }
}
