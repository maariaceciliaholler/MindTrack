package com.web.mindtrackproject.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tb_label")
public class Label {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_label", nullable = false)
    private Long idLabel;

    @Column(name = "name_label", nullable = false)
    private String nameLabel;

    @ManyToOne
    @JoinColumn(name = "fk_id_user", nullable = false)
    private User user;
}

