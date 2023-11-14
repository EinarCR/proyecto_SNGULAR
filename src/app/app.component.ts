import { Component } from '@angular/core';
import { LogicaComponent } from './logica/logica.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valorInput = 0;
  resultForN2: number = 0;
  calculos = new LogicaComponent();

  onInputChange() {
    if (this.valorInput <= 20) {
      this.resultForN2 = this.calculos.serie(this.valorInput);
    }else{
      this.resultForN2 = 0;
    }
  }

}
