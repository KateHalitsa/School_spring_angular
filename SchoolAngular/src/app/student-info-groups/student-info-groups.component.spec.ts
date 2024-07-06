import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInfoGroupsComponent } from './student-info-groups.component';

describe('StudentInfoGroupsComponent', () => {
  let component: StudentInfoGroupsComponent;
  let fixture: ComponentFixture<StudentInfoGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentInfoGroupsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentInfoGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
