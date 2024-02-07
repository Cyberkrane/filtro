import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroMainComponent } from './filtro-main.component';

describe('FiltroMainComponent', () => {
  let component: FiltroMainComponent;
  let fixture: ComponentFixture<FiltroMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
