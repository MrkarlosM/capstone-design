import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProysComponent } from './list-proys.component';

describe('ListProysComponent', () => {
  let component: ListProysComponent;
  let fixture: ComponentFixture<ListProysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
