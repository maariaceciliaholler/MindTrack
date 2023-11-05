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
    private Long id_item;

    private String name_item;

    @ManyToOne
    @JoinColumn(name = "fk_id_trackListItem")
    private TrackListItem trackListItem;
}
