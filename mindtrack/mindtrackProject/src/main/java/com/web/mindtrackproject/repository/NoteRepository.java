package com.web.mindtrackproject.repository;

import com.web.mindtrackproject.entity.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface NoteRepository extends JpaRepository<Note, Long> {

    @Query("SELECT n FROM Note n WHERE n.user.id = :id_user")
    List<Note> getUserNotes(@Param("id_user") Long id_user);
}
