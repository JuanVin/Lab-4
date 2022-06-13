import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetainstrumentoComponent } from './tarjetainstrumento.component';

describe('TarjetainstrumentoComponent', () => {
  let component: TarjetainstrumentoComponent;
  let fixture: ComponentFixture<TarjetainstrumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetainstrumentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetainstrumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
