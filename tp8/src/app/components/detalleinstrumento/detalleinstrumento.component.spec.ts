import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleinstrumentoComponent } from './detalleinstrumento.component';

describe('DetalleinstrumentoComponent', () => {
  let component: DetalleinstrumentoComponent;
  let fixture: ComponentFixture<DetalleinstrumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleinstrumentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleinstrumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
