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
    private Long id_label;

    private String name_label;

    @ManyToOne
    @JoinColumn(name = "fk_id_user")
    private User user;
}

