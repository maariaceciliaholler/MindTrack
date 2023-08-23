package com.devmindtrack.mindtrack.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devmindtrack.mindtrack.models.Note;

public interface NoteRepository extends JpaRepository<Note, Long> {

}
