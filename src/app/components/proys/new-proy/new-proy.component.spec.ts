import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProyComponent } from './new-proy.component';

describe('NewProyComponent', () => {
  let component: NewProyComponent;
  let fixture: ComponentFixture<NewProyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewProyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
