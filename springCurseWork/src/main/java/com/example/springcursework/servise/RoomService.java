package com.example.springcursework.servise;

import com.example.springcursework.model.Room;

import java.util.List;

public interface RoomService {
    Room insert( Room roomVO);

    public List<Room> findAll();

    public void delete(int id);

    public Room findById(int id);
    public Room updateRoom(int id, Room roomVO);
}
