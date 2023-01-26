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

import com.example.uns.repository.ProfessorRepository;
import com.example.uns.model.Professor;

@RestController
@RequestMapping("/uns")
public class ProfessorController {
    
    @Autowired
    private ProfessorRepository repository;

    private int counter;

    @GetMapping("/professors")
    public List<Professor> getAllProfessors() {
        return repository.findAll();
    }

    @PostMapping("/professors")
    public ResponseEntity<Void> createProfessor(@RequestBody Professor professor) {
        counter++;
        System.out.println("Counter:" + counter);
        if (repository.findByJmbg(professor.getJmbg()) != null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        repository.save(professor);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
