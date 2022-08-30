import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeExperimentsComponent } from './pipe-experiments.component';

describe('PipeExperimentsComponent', () => {
  let component: PipeExperimentsComponent;
  let fixture: ComponentFixture<PipeExperimentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeExperimentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeExperimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
