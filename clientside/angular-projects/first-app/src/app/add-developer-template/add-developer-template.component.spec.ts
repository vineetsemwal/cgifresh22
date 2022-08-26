import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeveloperTemplateComponent } from './add-developer-template.component';

describe('AddDeveloperTemplateComponent', () => {
  let component: AddDeveloperTemplateComponent;
  let fixture: ComponentFixture<AddDeveloperTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDeveloperTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDeveloperTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
