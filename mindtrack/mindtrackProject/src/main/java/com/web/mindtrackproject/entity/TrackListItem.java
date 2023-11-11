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
    private Long idTrackList;

    @Column(name = "title_track_list", nullable = false)
    private String titleTrackList;

    @Column(name = "date_track_list", nullable = false)
    private Date dateTrackList;

    @OneToMany(mappedBy = "trackListItem")
    private List<ListItem> itemsTrackList;

    @ManyToOne
    @JoinColumn(name = "fk_id_user", nullable = false)
    private User user;
}








