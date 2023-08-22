package com.devmindtrack.mindtrack.models;

import java.sql.Date;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_trackListItem")
public class TrackListItem {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int listId;
    private String listTitle;
    private List<String> listItems;
    private Date listDate;
    
    @ManyToOne
    private User user;

    public TrackListItem() {
    }

    public int getListId() {
        return listId;
    }

    public String getListTitle() {
        return listTitle;
    }

    public List<String> getListItems() {
        return listItems;
    }

    public Date getListDate() {
        return listDate;
    }
    
    public User getUser() {
		return user;
	}
    
    public void setListDate(Date listDate) {
		this.listDate = listDate;
	}
    
    public void setListId(int listId) {
		this.listId = listId;
	}
    
    public void setListItems(List<String> listItems) {
		this.listItems = listItems;
	}
    
    public void setListTitle(String listTitle) {
		this.listTitle = listTitle;
	}
    
    public void setUser(User user) {
		this.user = user;
	}
}
