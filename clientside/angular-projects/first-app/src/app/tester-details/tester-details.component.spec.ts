import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterDetailsComponent } from './tester-details.component';

describe('TesterDetailsComponent', () => {
  let component: TesterDetailsComponent;
  let fixture: ComponentFixture<TesterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesterDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
