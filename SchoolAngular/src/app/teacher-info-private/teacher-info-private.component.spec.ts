import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherInfoPrivateComponent } from './teacher-info-private.component';

describe('TeacherInfoPrivateComponent', () => {
  let component: TeacherInfoPrivateComponent;
  let fixture: ComponentFixture<TeacherInfoPrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherInfoPrivateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherInfoPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
