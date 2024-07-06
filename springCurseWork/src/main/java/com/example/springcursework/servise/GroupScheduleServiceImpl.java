package com.example.springcursework.servise;

import com.example.springcursework.model.GroupSchedule;
import com.example.springcursework.model.GroupScheduleStudentView;
import com.example.springcursework.model.GroupScheduleView;
import com.example.springcursework.repository.GroupScheduleRepository;
import com.example.springcursework.repository.GroupScheduleViewRepository;
import com.example.springcursework.repository.GroupScheduleStudentViewRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class GroupScheduleServiceImpl implements GroupScheduleService {
    @Autowired
    private GroupScheduleRepository groupScheduleRepository;

    @Autowired
    private GroupScheduleViewRepository groupScheduleViewRepository;

    @Autowired
    private GroupScheduleStudentViewRepository groupScheduleStudentViewRepository;

    @Override
    public GroupSchedule insert(GroupSchedule groupScheduleVO) {
        return this.groupScheduleRepository.save(groupScheduleVO);
    }

    @Override
    public List<GroupSchedule> findAll() {
        return this.groupScheduleRepository.findAll();
    }

    @Override
    public List<GroupSchedule> findGroupScheduleListForGroup(int groupId){
        return this.groupScheduleRepository.findByGroupId(groupId);
    }

    @Override
    public void delete(int id) {
        this.groupScheduleRepository.deleteById(id);
    }

    @Override
    public GroupSchedule findById(int id) {
        return this.groupScheduleRepository.findById(id).get();
    }

    @Override
    public GroupSchedule updateGroupSchedule(int id, GroupSchedule groupScheduleVO) {
        groupScheduleVO.setId(id);
        return this.groupScheduleRepository.save(groupScheduleVO);
    }
    @Override
    public List<GroupScheduleView> findByTeacherId(int teacherId){
        return this.groupScheduleViewRepository.findByTeacherId(teacherId);
    }
    @Override
    public GroupScheduleView findGroupScheduleViewById(int id) {
        return this.groupScheduleViewRepository.findById(id).get();
    }

    @Override
    public List<GroupScheduleStudentView> findByStudentId(int studentId){
        return this.groupScheduleStudentViewRepository.findByStudentId(studentId);
    }
}
