package com.example.springcursework.controller;

import com.example.springcursework.model.Room;
import com.example.springcursework.servise.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "room")
@CrossOrigin(origins = "http://localhost:4200")
public class RoomController {
    @Autowired
    private RoomService roomService;

    @PostMapping
    @ResponseStatus(value = HttpStatus.CREATED)
    public Room registerRoom(@RequestBody Room roomVO) {
        return this.roomService.insert(roomVO);
    }

    @GetMapping
    @ResponseStatus(value = HttpStatus.OK)
    public List<Room> findAllRoom() {
        return this.roomService.findAll();
    }

    @GetMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.OK)
    public Room findById(@PathVariable int id) {
        return this.roomService.findById(id);
    }

    @PutMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.OK)
    public Room updateRoom(@PathVariable int id, @RequestBody Room roomVO) {
        return this.roomService.updateRoom(id, roomVO);
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteRoom(@PathVariable int id) {
        this.roomService.delete(id);
    }



}
