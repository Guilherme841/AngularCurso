import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleMetodoComponent } from './cycle-metodo.component';

describe('CycleMetodoComponent', () => {
  let component: CycleMetodoComponent;
  let fixture: ComponentFixture<CycleMetodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CycleMetodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CycleMetodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
