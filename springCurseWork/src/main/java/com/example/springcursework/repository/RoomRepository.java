package com.example.springcursework.repository;

import com.example.springcursework.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoomRepository extends JpaRepository<Room, Integer> {
   // Optional<Room> findRoomById(int roomId);
}
