import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSimpleCrmComponent } from './project-simple-crm.component';

describe('ProjectSimpleCrmComponent', () => {
  let component: ProjectSimpleCrmComponent;
  let fixture: ComponentFixture<ProjectSimpleCrmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectSimpleCrmComponent]
    });
    fixture = TestBed.createComponent(ProjectSimpleCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
