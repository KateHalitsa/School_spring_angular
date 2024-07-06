import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInfoScheduleComponent } from './student-info-schedule.component';

describe('StudentInfoScheduleComponent', () => {
  let component: StudentInfoScheduleComponent;
  let fixture: ComponentFixture<StudentInfoScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentInfoScheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentInfoScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
