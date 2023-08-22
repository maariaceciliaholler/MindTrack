package com.devmindtrack.mindtrack.models;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_note")
public class Note {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int noteId;
    private String noteTitle;
    private String noteContent;
    private Date creationDate;
    
    @ManyToOne
    private User user;

    public Note() {
    }

    public int getNoteId() {
        return noteId;
    }

    public String getNoteTitle() {
        return noteTitle;
    }

    public String getNoteContent() {
        return noteContent;
    }

    public Date getCreationDate() {
        return creationDate;
    }
    
    public User getUser() {
		return user;
	}
    
    public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}
    
    public void setNoteContent(String noteContent) {
		this.noteContent = noteContent;
	}
    
    public void setNoteId(int noteId) {
		this.noteId = noteId;
	}
    
    public void setNoteTitle(String noteTitle) {
		this.noteTitle = noteTitle;
	}
    
    public void setUser(User user) {
		this.user = user;
	}
}
