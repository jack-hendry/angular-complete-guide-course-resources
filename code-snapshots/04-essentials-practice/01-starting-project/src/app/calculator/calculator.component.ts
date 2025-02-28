import { Component, output, signal } from '@angular/core';
import { UserInput } from '../shared/calc.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  calculation = output<UserInput>();
  initialInvestment = signal(0);
  anualInvestment = signal(0);
  expectedReturn = signal(5);
  duration = signal(10);

  onSubmit() {
    let tmp: UserInput = {
      initialInvestment: this.initialInvestment(),
      anualInvestment: this.anualInvestment(),
      expectedReturn: this.expectedReturn(),
      duration: this.duration(),
    };
    this.calculation.emit(tmp);

    console.log(tmp);
  }
}
