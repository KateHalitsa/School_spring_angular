import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInfoAccountComponent } from './student-info-account.component';

describe('StudentInfoAccountComponent', () => {
  let component: StudentInfoAccountComponent;
  let fixture: ComponentFixture<StudentInfoAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentInfoAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentInfoAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
