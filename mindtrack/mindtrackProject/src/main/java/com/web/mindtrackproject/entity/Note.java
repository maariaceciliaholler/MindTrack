package com.web.mindtrackproject.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tb_note")
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_note", nullable = false)
    private Long idNote;

    @Column(name = "title_note", nullable = false)
    private String titleNote;

    @Column(name = "content_note", nullable = false)
    private String contentNote;

    @Column(name = "date_note", nullable = false)
    private Date dateNote;

    @ManyToOne
    @JoinColumn(name = "fk_id_user", nullable = false)
    private User user;
}

