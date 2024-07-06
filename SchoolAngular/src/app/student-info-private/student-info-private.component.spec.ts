import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInfoPrivateComponent } from './student-info-private.component';

describe('StudentInfoPrivateComponent', () => {
  let component: StudentInfoPrivateComponent;
  let fixture: ComponentFixture<StudentInfoPrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentInfoPrivateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentInfoPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
