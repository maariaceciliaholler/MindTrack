package com.devmindtrack.mindtrack.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_label")
public class Label {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int labelId;
    private String labelName;
    
    @ManyToOne
    @JoinColumn(name = "fk_user_id")
    private User user;

    public Label() {
    }

    public int getLabelId() {
        return labelId;
    }

    public String getLabelName() {
        return labelName;
    }
    
    public User getUser() {
		return user;
	}
    
    public void setUser(User user) {
		this.user = user;
	}
    
    public void setLabelId(int labelId) {
		this.labelId = labelId;
	}
    
}