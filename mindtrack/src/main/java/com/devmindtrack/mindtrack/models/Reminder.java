package com.devmindtrack.mindtrack.models;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_reminder")
public class Reminder {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int reminderId;
    private Date reminderDate;
    private String reminderContent;
    
    @ManyToOne
    private User user;

    public Reminder() {
    }

    public int getReminderId() {
        return reminderId;
    }

    public Date getReminderDate() {
        return reminderDate;
    }

    public String getReminderContent() {
        return reminderContent;
    }
    
    public User getUser() {
		return user;
	}
    
    public void setReminderContent(String reminderContent) {
		this.reminderContent = reminderContent;
	}
    
    public void setReminderDate(Date reminderDate) {
		this.reminderDate = reminderDate;
	}
    
    public void setReminderId(int reminderId) {
		this.reminderId = reminderId;
	}
    
    public void setUser(User user) {
		this.user = user;
	}
}
