import { Injectable } from '@angular/core';
import { UserInput } from './shared/calc.model';

@Injectable({
  providedIn: 'root'
})
export class InvestmentResultsService {

  constructor() { }

  calculateInvestmentResults(UserInput: UserInput
  ) {
  const {initialInvestment,
    anualInvestment,
    expectedReturn,
    duration} = UserInput;
    const annualData = [];
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + anualInvestment;
      const totalInterest =
        investmentValue - anualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: anualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + anualInvestment * year,
      });
    }
  
    return annualData;
  }

}
