import { Component, Input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalcType, UserInput } from './shared/calc.model';
import { InvestmentResultsService } from './investment-results.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent,CalculatorComponent]
})
export class AppComponent {
   calculation?: CalcType[];

   constructor(private investmentCalc: InvestmentResultsService){}

   passCalculation(UserInput: UserInput){
    this.calculation = this.investmentCalc.calculateInvestmentResults(UserInput)
  
    console.log(this.calculation)
   }
  
}
