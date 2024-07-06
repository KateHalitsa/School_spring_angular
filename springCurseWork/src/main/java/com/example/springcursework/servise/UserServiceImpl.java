package com.example.springcursework.servise;

import com.example.springcursework.model.Student;
import com.example.springcursework.model.Teacher;
import com.example.springcursework.model.User;
import com.example.springcursework.payload.response.UserInfoResponse;
import com.example.springcursework.repository.StudentRepository;
import com.example.springcursework.repository.TeacherRepository;
import com.example.springcursework.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private TeacherRepository teacherRepository;

    @Override
    public User insert(User userVO) {
        return this.userRepository.save(userVO);
    }

    @Override
    public List<User> findAll() {
        return this.userRepository.findAll();
    }

    @Override
    public void delete(int id) {
        this.userRepository.deleteById(id);
    }

    @Override
    public User findById(int id) {
        return this.userRepository.findById(id).get();
    }
    @Override
    public User findByLogin(String username) {
        Optional<User> optionalUser = this.userRepository.findByLogin(username);
        if (optionalUser.isEmpty()) {
            return null;
        }else
        {
            return optionalUser.get();
        }
    }

    @Override
    public Integer findRelatedStudentId(int userId){
        Student student = studentRepository.findByUserId(userId).orElseGet(() -> {return null;});
        if (student != null)
            return student.getId();
        else
            return null;
    }

    public Integer findRelatedTeacherId(int userId){
        Teacher teacher = teacherRepository.findByUserId(userId).orElseGet(() -> {return null;});
        if (teacher != null)
            return teacher.getId();
        else
            return null;
    }

    @Override
    public UserInfoResponse getUserInfoResponse(User user){
        Integer teacherId = this.findRelatedTeacherId(user.getId());
        Integer studentId = this.findRelatedStudentId(user.getId());
        return new UserInfoResponse(
                user.getId(),
                user.getLogin(),
                user.getEmail(),
                BuildRolesForUser(teacherId, studentId),
                teacherId,
                studentId);

    }

    private List<String> BuildRolesForUser(Integer teacherId, Integer studentId){
        List<String> result = new ArrayList<>();
        if (teacherId != null)
            result.add("teacher");
        else if (studentId != null)
            result.add("student");
        else
            result.add("admin");
        return result;
    }

    @Override
    public User updateUser(int id, User userVO) {
        userVO.setId(id);
        return this.userRepository.save(userVO);
    }
}
