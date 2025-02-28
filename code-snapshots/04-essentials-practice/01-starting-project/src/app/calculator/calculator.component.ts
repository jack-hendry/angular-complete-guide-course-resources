import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  initialInvestment: number = 0;
  anualInvestment: number = 0;
  expectedReturn: number = 5;
  duration: number = 10;

  onClick() {
    console.log(`
      initialInvestment: ${this.initialInvestment}
anualInvestment: ${this.anualInvestment}
expectedReturn: ${this.expectedReturn}
duration: ${this.duration}

      `);
  }

  onSubmit(){
    console.log("submitted")
  }
}
