package com.example.springcursework.controller;

import com.example.springcursework.model.Attendance;
import com.example.springcursework.model.AttendanceView;
import com.example.springcursework.servise.AttendanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "attendance")
@CrossOrigin(origins = "http://localhost:4200")
public class AttendanceController {
    @Autowired
    private AttendanceService attendanceService;

    @PostMapping
    @ResponseStatus(value = HttpStatus.CREATED)
    public Attendance registerAttendance(@RequestBody Attendance attendanceVO) {
        return this.attendanceService.insert(attendanceVO);
    }

    @GetMapping
    @ResponseStatus(value = HttpStatus.OK)
    public List<Attendance> findAllAttendance() {
        return this.attendanceService.findAll();
    }

    @GetMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.OK)
    public Attendance findById(@PathVariable int id) {
        return this.attendanceService.findById(id);
    }

    @PutMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.OK)
    public Attendance updateGroup(@PathVariable int id, @RequestBody Attendance attendanceVO) {
        return this.attendanceService.updateAttendance(id, attendanceVO);
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteAttendance(@PathVariable int id) {
        this.attendanceService.delete(id);
    }

    @GetMapping(value = "/find-for-group-schedule/{groupScheduleId}")
    @ResponseStatus(value = HttpStatus.OK)
    public List<AttendanceView> findByGroupScheduleId(@PathVariable int groupScheduleId) {
       return this.attendanceService.findByGroupScheduleId(groupScheduleId);
    }

    @PutMapping(value = "/update-attendances/{groupScheduleId}")
    @ResponseStatus(value = HttpStatus.OK)
    public List<AttendanceView> updateAttendances(@PathVariable int groupScheduleId, @RequestBody List<AttendanceView> attendances) {
        return this.attendanceService.updateAttendances ( groupScheduleId, attendances);
    }

}
