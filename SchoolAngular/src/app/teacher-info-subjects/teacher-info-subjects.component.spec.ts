import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherInfoSubjectsComponent } from './teacher-info-subjects.component';

describe('StudentInfoGroupsComponent', () => {
  let component: TeacherInfoSubjectsComponent;
  let fixture: ComponentFixture<TeacherInfoSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherInfoSubjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherInfoSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
