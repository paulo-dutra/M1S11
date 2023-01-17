import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNgcontentComponent } from './card-ngcontent.component';

describe('CardNgcontentComponent', () => {
  let component: CardNgcontentComponent;
  let fixture: ComponentFixture<CardNgcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNgcontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNgcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
