import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupScheduleEditorComponent } from './groupschedule-editor.component';

describe('GroupscheduleEditorComponent', () => {
  let component: GroupScheduleEditorComponent;
  let fixture: ComponentFixture<GroupScheduleEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupScheduleEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupScheduleEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
