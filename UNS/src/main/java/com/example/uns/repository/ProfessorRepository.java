package com.example.uns.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.example.uns.model.Professor;

public interface ProfessorRepository  extends JpaRepository<Professor, Long> {

    @Query("SELECT p FROM Professor p WHERE p.jmbg =?1")
    Professor findByJmbg(String jmbg);
}