package com.example.springcursework.servise;

import com.example.springcursework.model.Attendance;
import com.example.springcursework.model.AttendanceView;
import com.example.springcursework.repository.AttendanceRepository;
import com.example.springcursework.repository.AttendanceViewRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class AttendanceServiceImpl implements AttendanceService {
    @Autowired
    private AttendanceRepository attendanceRepository;

    @Autowired
    private AttendanceViewRepository attendanceViewRepository;

    @Override
    public Attendance insert(Attendance attendanceVO) {
        return this.attendanceRepository.save(attendanceVO);
    }

    @Override
    public List<Attendance> findAll() {
        return this.attendanceRepository.findAll();
    }

    @Override
    public void delete(int id) {
        this.attendanceRepository.deleteById(id);
    }

    @Override
    public Attendance findById(int id) {
        return this.attendanceRepository.findById(id).get();
    }

    @Override
    public Attendance updateAttendance(int id, Attendance attendanceVO) {
        attendanceVO.setId(id);
        return this.attendanceRepository.save(attendanceVO);
    }

    @Override
    public List<AttendanceView> findByGroupScheduleId(int groupScheduleId){
        List<AttendanceView> result = attendanceViewRepository.findByGroupScheduleId(groupScheduleId);
        for (int i = 0; i < result.size(); i++) {
            AttendanceView attend = result.get(i);
            if (attend.getAttendanceId() != null)
                attend.setIsChecked(attend.getAttendanceId() > 0);
            else
                attend.setIsChecked(false);
        }
        return result;
    }

    @Override
    public List<AttendanceView> updateAttendances(int groupScheduleId, List<AttendanceView> attendances){
        for (int i = 0; i < attendances.size(); i++) {
            AttendanceView attend = attendances.get(i);
            boolean isEmptyAttendanceId = (attend.getAttendanceId() == null) || (attend.getAttendanceId() <= 0);
            if (attend.getIsChecked()){
                if (isEmptyAttendanceId){
                    Attendance newAttendance = new Attendance();
                    newAttendance.setGroupScheduleId(attend.getGroupScheduleId());
                    newAttendance.setStudentId(attend.getStudentId());
                    this.insert(newAttendance);
                }
            } else {
              if (!isEmptyAttendanceId){
                  this.delete(attend.getAttendanceId());
              }
            }
        }
        return findByGroupScheduleId(groupScheduleId);
    }
}
