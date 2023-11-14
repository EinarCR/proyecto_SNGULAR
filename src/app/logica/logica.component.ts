import { Component } from '@angular/core';

@Component({
  selector: 'app-logica',
  templateUrl: './logica.component.html',
  styleUrls: ['./logica.component.css']
})
export class LogicaComponent {

    //Función para crear la sucesión de fibonacci mediante un numero (n) y retornar el valor
    fibonacci(n: number): number {
      if (n <= 1) {
        return n;
      } else {
        return this.fibonacci(n - 1) + this.fibonacci(n - 2);
      }
    }
  
    //Función para obtener el numero primo equivalente a un numero (n)  
    triangular(n: number): number {
      return (n * (n + 1)) / 2;
    }
  
    //Esta función obtiene la posicion del numero primo, mediante el numero n introducido
    obtenerPrimoEnPosicion(posicion: number) {
      let count = 0;
      let numero = 1;
  
      while (count < posicion) {
        numero++;
        if (this.esPrimo(numero)) {
          count++;
        }
      }
  
      return numero;
    }
  
    //función que válida
    esPrimo(num: number) {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num !== 1;
    }
  
    //Función que crea la serie y obtiene los resultados finales
    serie(n: number): number {
      // Calcula los valores requeridos
      const fibValue = this.fibonacci(n);
      const triangularValue = this.triangular(n - 1);
      const valorPrimo = this.obtenerPrimoEnPosicion(n + 2);
  
      var result = (5 * fibValue - 3 * triangularValue) / (2 * valorPrimo);
      return result;
    }

}
