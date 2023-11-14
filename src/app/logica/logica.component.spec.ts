import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicaComponent } from './logica.component';

describe('LogicaComponent', () => {
  let component: LogicaComponent;
  let fixture: ComponentFixture<LogicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('Debería calcular correctamente la sucesión de Fibonacci', () => {
    expect(component.fibonacci(0)).toBe(0);
    expect(component.fibonacci(1)).toBe(1);
    expect(component.fibonacci(2)).toBe(1);
    expect(component.fibonacci(5)).toBe(5);
  });

  it('Debería calcular correctamente el número triangular', () => {
    expect(component.triangular(1)).toBe(1);
    expect(component.triangular(2)).toBe(3);
    expect(component.triangular(3)).toBe(6);
  });

  it('Debería obtener correctamente el número primo en una posición', () => {
    expect(component.obtenerPrimoEnPosicion(1)).toBe(2);
    expect(component.obtenerPrimoEnPosicion(2)).toBe(3);
    expect(component.obtenerPrimoEnPosicion(3)).toBe(5);
  });

  it('Debería validar correctamente si el número es primo', () => {
    expect(component.esPrimo(1)).toBe(false);
    expect(component.esPrimo(2)).toBe(true);
    expect(component.esPrimo(4)).toBe(false);
  });

  it('Debería calcular correctamente la serie', () => {
    expect(component.serie(0)).toBe(0);
    expect(component.serie(1)).toBe(0.5);
    expect(component.serie(2)).toBe(0.14285714285714285);
    expect(component.serie(5)).toBe(0.045454545454545456);
  });
});
