package com.example.springcursework.controller;

import com.example.springcursework.model.GroupSchedule;
import com.example.springcursework.model.GroupScheduleStudentView;
import com.example.springcursework.model.GroupScheduleView;
import com.example.springcursework.servise.GroupScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "groupschedule")
@CrossOrigin(origins = "http://localhost:4200")
public class GroupScheduleController {
    @Autowired
    private GroupScheduleService groupScheduleService;

    @PostMapping
    @ResponseStatus(value = HttpStatus.CREATED)
    public GroupSchedule registerGroupSchedule(@RequestBody GroupSchedule groupScheduleVO) {
        return this.groupScheduleService.insert(groupScheduleVO);
    }

    @GetMapping
    @ResponseStatus(value = HttpStatus.OK)
    public List<GroupSchedule> findAllGroupSchedule() {
        return this.groupScheduleService.findAll();
    }

    @GetMapping(value = "/find-for-group/{groupId}")
    @ResponseStatus(value = HttpStatus.OK)
    public List<GroupSchedule> findGroupScheduleListForGroup(@PathVariable int groupId) {

        return this.groupScheduleService.findGroupScheduleListForGroup(groupId);
    }

    @GetMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.OK)
    public GroupSchedule findById(@PathVariable int id) {
        return this.groupScheduleService.findById(id);
    }

    @PutMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.OK)
    public GroupSchedule updateGroup(@PathVariable int id, @RequestBody GroupSchedule groupScheduleVO) {
        return this.groupScheduleService.updateGroupSchedule(id, groupScheduleVO);
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteGroupSchedule(@PathVariable int id) {
        this.groupScheduleService.delete(id);
    }

    @GetMapping(value = "/find-for-teacher/{teacherId}")
    @ResponseStatus(value = HttpStatus.OK)
    public List<GroupScheduleView> findGroupScheduleViewListByTeacherId(@PathVariable int teacherId) {

        return this.groupScheduleService.findByTeacherId(teacherId);
    }

    @GetMapping(value = "/find-for-student/{studentId}")
    @ResponseStatus(value = HttpStatus.OK)
    public List<GroupScheduleStudentView> findGroupScheduleStudentViewListByTeacherId(@PathVariable int studentId) {

        return this.groupScheduleService.findByStudentId(studentId);
    }

    @GetMapping(value = "/find-view-by-id/{id}")
    @ResponseStatus(value = HttpStatus.OK)
    public GroupScheduleView findGroupScheduleViewListById(@PathVariable int id) {
        return this.groupScheduleService.findGroupScheduleViewById(id);
    }

}
