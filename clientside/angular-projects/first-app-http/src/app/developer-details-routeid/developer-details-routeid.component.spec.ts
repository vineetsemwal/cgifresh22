import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperDetailsRouteidComponent } from './developer-details-routeid.component';

describe('DeveloperDetailsRouteidComponent', () => {
  let component: DeveloperDetailsRouteidComponent;
  let fixture: ComponentFixture<DeveloperDetailsRouteidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperDetailsRouteidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperDetailsRouteidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
