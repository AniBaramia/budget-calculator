import { Component, OnInit } from '@angular/core';
import { CalculatorAppService } from './calculator.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  amount?: number;

  incomes: number[] = [];
  expenses: number[] = [];
  balance!: number;

  description: string = '';

  constructor(private calculatorAppService: CalculatorAppService, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getIncomes();
  }

  getIncomes() {
    this.httpClient
      .get<{ id: number; amount: number }[]>('http://localhost:3000/amounts')
      .subscribe((amounts) => {
        this.incomes = [];
        this.expenses = [];
        this.balance = 0;

        for (let amount of amounts) {
          if (amount.amount > 0) {
            this.incomes.push(amount.amount);
          } else {
            this.expenses.push(Math.abs(amount.amount));
          }

          this.balance += amount.amount;
        }
      });
  }
  addOnClick() {
    this.httpClient
      .post('http://localhost:3000/amounts', { amount: this.amount })
      .subscribe(() => {
        this.getIncomes();
        this.amount = undefined;
      });
  }
}
