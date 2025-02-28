import { Component, Input, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalcType, UserInput } from './shared/calc.model';
import { InvestmentResultsService } from './investment-results.service';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, CalculatorComponent, InvestmentResultsComponent],
})
export class AppComponent {
  calculation = signal<CalcType[] | undefined>(undefined);

  constructor(private investmentCalc: InvestmentResultsService) {}

  passCalculation(UserInput: UserInput) {
    this.calculation.set(
      this.investmentCalc.calculateInvestmentResults(UserInput)
    );
    console.log(this.calculation());
  }
}
