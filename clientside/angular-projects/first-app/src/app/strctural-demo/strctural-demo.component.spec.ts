import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDemoComponent } from './strctural-demo.component';

describe('StrcturalDemoComponent', () => {
  let component: StructuralDemoComponent;
  let fixture: ComponentFixture<StructuralDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
