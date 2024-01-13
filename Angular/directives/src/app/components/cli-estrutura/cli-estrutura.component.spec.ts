import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliEstruturaComponent } from './cli-estrutura.component';

describe('CliEstruturaComponent', () => {
  let component: CliEstruturaComponent;
  let fixture: ComponentFixture<CliEstruturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CliEstruturaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CliEstruturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
