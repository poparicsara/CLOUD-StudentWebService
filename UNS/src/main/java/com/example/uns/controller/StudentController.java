package com.example.uns.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.uns.repository.StudentRepository;
import com.example.uns.model.Student;

@RestController
@RequestMapping("/uns")
public class StudentController {
    @Autowired
    private StudentRepository repository;

    private int counter;

    @GetMapping("/students")
    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    @PostMapping("/students")
    public ResponseEntity<Void> createStudent(@RequestBody Student student) {
        if (repository.findByJmbg(student.getJmbg()) != null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        counter++;
        System.out.println("Counter:" + counter);
        repository.save(student);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
