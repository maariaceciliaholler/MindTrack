package com.web.mindtrackproject.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tb_trackListItem")
public class TrackListItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_trackListItem;

    private String title_trackListItem;

    private Date date_trackListItem;

    @OneToMany(mappedBy = "trackListItem")
    private List<ListItem> items_trackListItem;

    @ManyToOne
    @JoinColumn(name = "fk_id_user")
    private User user;
}

