import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherInfoAccountComponent } from './teacher-info-account.component';

describe('TeacherInfoAccountComponent', () => {
  let component: TeacherInfoAccountComponent;
  let fixture: ComponentFixture<TeacherInfoAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherInfoAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherInfoAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
