import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploIfelseComponent } from './exemplo-ifelse.component';

describe('ExemploIfelseComponent', () => {
  let component: ExemploIfelseComponent;
  let fixture: ComponentFixture<ExemploIfelseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploIfelseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploIfelseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
