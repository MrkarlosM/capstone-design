import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDocentesComponent } from './agregar-docentes.component';

describe('AgregarDocentesComponent', () => {
  let component: AgregarDocentesComponent;
  let fixture: ComponentFixture<AgregarDocentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarDocentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarDocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
