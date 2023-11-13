package com.web.mindtrackproject.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tb_listItem")
public class ListItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_item", nullable = false)
    private Long id;

    @Column(name = "name_item", nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name = "fk_id_track_list_item", nullable = false)
    private TrackListItem trackListItem;
}
