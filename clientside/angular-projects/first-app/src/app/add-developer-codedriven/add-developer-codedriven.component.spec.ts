import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeveloperCodedrivenComponent } from './add-developer-codedriven.component';

describe('AddDeveloperCodedrivenComponent', () => {
  let component: AddDeveloperCodedrivenComponent;
  let fixture: ComponentFixture<AddDeveloperCodedrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDeveloperCodedrivenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDeveloperCodedrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
