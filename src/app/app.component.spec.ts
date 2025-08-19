import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  //CONFIGURACION
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      //si hay mas dependencias debo mockearlas
      imports: [AppComponent],
    }).compileComponents();
  });

  //CASOS DE PRUEBA
  /*it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'proyecto_prueba' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('proyecto_prueba');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, proyecto_prueba');
  });*/

  it('deberia retornar un titulo incorrecto', () =>{
    // SET UP
    const fixture = TestBed.createComponent(AppComponent);
    // el fixture = expone o trae el DERECTCHANGES, COMPONENT, DOM
    // ADD
    const titulo = fixture.componentInstance.obtenerTitulo();
    //ASSERT
    expect(titulo).toBe('Hola mundo');
  });
});
