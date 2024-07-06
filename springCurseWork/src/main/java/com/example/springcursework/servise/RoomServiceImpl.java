package com.example.springcursework.servise;

import com.example.springcursework.model.Room;
import com.example.springcursework.repository.RoomRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class RoomServiceImpl implements RoomService
{
   @Autowired
   private RoomRepository roomRepository;

    @Override

    public Room insert(Room roomVO) {
        return this.roomRepository.save(roomVO);
    }

    @Override
    public List<Room> findAll() {
        return this.roomRepository.findAll();
    }

    @Override
    public void delete(int id) {
        this.roomRepository.deleteById(id);
    }

    @Override
    public Room findById(int id) {
        return this.roomRepository.findById(id).get();
    }

    @Override
    public Room updateRoom(int id, Room roomVO) {
        roomVO.setId(id);
        return this.roomRepository.save(roomVO);
    }
}
