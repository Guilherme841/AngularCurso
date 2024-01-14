import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaEstruturalComponent } from './diretiva-estrutural.component';

describe('DiretivaEstruturalComponent', () => {
  let component: DiretivaEstruturalComponent;
  let fixture: ComponentFixture<DiretivaEstruturalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiretivaEstruturalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiretivaEstruturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
