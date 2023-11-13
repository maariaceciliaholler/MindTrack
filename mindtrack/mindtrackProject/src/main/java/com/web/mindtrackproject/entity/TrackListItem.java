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
    @Column(name = "id_track_list", nullable = false)
    private Long id;

    @Column(name = "title_track_list", nullable = false)
    private String title;

    @Column(name = "date_track_list", nullable = false)
    private Date date;

    @OneToMany(mappedBy = "trackListItem")
    private List<ListItem> items;

    @Column(name = "status_track_list", nullable = false)
    private String status;

    @Column(name = "fk_id_user")
    private Long userId;
}








