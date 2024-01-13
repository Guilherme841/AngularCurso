import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaStyleComponent } from './diretiva-style.component';

describe('DiretivaStyleComponent', () => {
  let component: DiretivaStyleComponent;
  let fixture: ComponentFixture<DiretivaStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiretivaStyleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiretivaStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
