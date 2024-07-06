package com.example.springcursework.servise;

import com.example.springcursework.model.Group;
import com.example.springcursework.model.GroupGeneralView;
import com.example.springcursework.repository.GroupGeneralViewRepository;
import com.example.springcursework.repository.GroupRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class GroupServiceImpl implements GroupService {
    @Autowired
    private GroupRepository groupRepository;

    @Autowired
    private GroupGeneralViewRepository groupGeneralViewRepository;

    @Override
    public Group insert(Group groupVO) {
        return this.groupRepository.save(groupVO);
    }

    @Override
    public List<Group> findAll() {
        return this.groupRepository.findAll();
    }

    @Override
    public void delete(int id) {
        this.groupRepository.deleteById(id);
    }

    @Override
    public Group findById(int id) {
        return this.groupRepository.findById(id).get();
    }

    @Override
    public Group updateGroup(int id, Group groupVO) {
        groupVO.setId(id);
        return this.groupRepository.save(groupVO);
    }
    @Override
    public List<GroupGeneralView> generalView() {
        return this.groupGeneralViewRepository.findAll();
    }

}
