import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IteminstrumentoComponent } from './iteminstrumento.component';

describe('IteminstrumentoComponent', () => {
  let component: IteminstrumentoComponent;
  let fixture: ComponentFixture<IteminstrumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IteminstrumentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IteminstrumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
