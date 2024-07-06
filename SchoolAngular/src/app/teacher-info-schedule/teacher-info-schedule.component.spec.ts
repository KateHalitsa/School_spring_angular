import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherInfoScheduleComponent } from './teacher-info-schedule.component';

describe('TeacherInfoScheduleComponent', () => {
  let component: TeacherInfoScheduleComponent;
  let fixture: ComponentFixture<TeacherInfoScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherInfoScheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherInfoScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
