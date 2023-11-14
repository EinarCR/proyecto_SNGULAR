import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  valorInput = 0;
onInputChange(){
  if(this.valorInput <= 10){
    console.log('nuevo valor: ', this.valorInput);
    this.resultForN2 = this.serie(this.valorInput);
  }
}

  resultForN2: number = 0;

  constructor() {
    // Sustituye n por 2
    console.log(this.valorInput);
  }

  fibonacci(n: number): number {
    if (n <= 1) {
      return n;
    } else {
      return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
  }

  triangular(n: number): number {
    return (n * (n + 1)) / 2;
  }

  isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  serie(n: number): number {
    // Calcula los valores requeridos
    const fibValue = this.fibonacci(n);
    const triangularValue = this.triangular(n - 1);
    let primeCount = 0;
    let primeValue = 0;

    // Encuentra el (n+2)-ésimo número primo
    for (let i = 2; primeCount <= n + 2; i++) {
      if (this.isPrime(i)) {
        primeValue = i;
        primeCount++;
      }
    }

    // Calcula el resultado de la serie
    const result = (5 * fibValue - 3 * triangularValue) / (2 * primeValue);
    return result;
  }
}
