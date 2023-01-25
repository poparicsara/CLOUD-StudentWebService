package com.example.uns.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.example.uns.model.Student;

public interface StudentRepository  extends JpaRepository<Student, Long> {

    @Query("SELECT s FROM Student s WHERE s.jmbg =?1")
    Student findByJmbg(String jmbg);
}