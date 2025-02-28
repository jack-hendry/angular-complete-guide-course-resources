import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResultsService } from '../investment-results.service';
import { CalcType, UserInput } from '../shared/calc.model';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  @Output() calculation = new EventEmitter<UserInput>;
  initialInvestment: number = 0;
  anualInvestment: number = 0;
  expectedReturn: number = 5;
  duration: number = 10;

  // constructor(private investmentCalc: InvestmentResultsService) {}

  onSubmit() {
    // let tmp = this.investmentCalc.calculateInvestmentResults(
    let tmp : UserInput = {
      initialInvestment: this.initialInvestment,
      anualInvestment: this.anualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration
    }
    // );
    this.calculation.emit(tmp);

    console.log(tmp);
  }
}
