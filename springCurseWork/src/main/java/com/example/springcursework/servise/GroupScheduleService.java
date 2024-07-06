package com.example.springcursework.servise;

import com.example.springcursework.model.GroupSchedule;
import com.example.springcursework.model.GroupScheduleStudentView;
import com.example.springcursework.model.GroupScheduleView;

import java.util.List;

public interface GroupScheduleService {
    public GroupSchedule insert(GroupSchedule groupScheduleVO);
    public List<GroupSchedule> findAll();
    public List<GroupSchedule> findGroupScheduleListForGroup(int groupId);
    public void delete(int id);
    public GroupSchedule findById(int id);
    public GroupSchedule updateGroupSchedule(int id, GroupSchedule groupScheduleVO);
    public List<GroupScheduleView> findByTeacherId(int teacherId);
    public GroupScheduleView findGroupScheduleViewById(int id);
    public List<GroupScheduleStudentView> findByStudentId(int studentId);
}
