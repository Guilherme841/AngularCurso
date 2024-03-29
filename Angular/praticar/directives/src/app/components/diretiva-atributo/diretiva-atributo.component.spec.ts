import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaAtributoComponent } from './diretiva-atributo.component';

describe('DiretivaAtributoComponent', () => {
  let component: DiretivaAtributoComponent;
  let fixture: ComponentFixture<DiretivaAtributoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiretivaAtributoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiretivaAtributoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
