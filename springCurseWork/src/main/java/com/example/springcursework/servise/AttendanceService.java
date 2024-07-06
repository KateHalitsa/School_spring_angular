package com.example.springcursework.servise;

import com.example.springcursework.model.Attendance;
import com.example.springcursework.model.AttendanceView;

import java.util.List;

public interface AttendanceService {
    public Attendance insert(Attendance attendanceVO);

    public List<Attendance> findAll();

    public void delete(int id);

    public Attendance findById(int id);

    public Attendance updateAttendance(int id, Attendance attendanceVO);

    List<AttendanceView> findByGroupScheduleId(int groupScheduleId);

    List<AttendanceView> updateAttendances(int groupScheduleId, List<AttendanceView> attendances);
}
