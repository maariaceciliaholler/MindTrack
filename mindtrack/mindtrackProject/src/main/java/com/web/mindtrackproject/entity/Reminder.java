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
@Table(name = "tb_reminder")
public class Reminder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_reminder", nullable = false)
    private Long idReminder;

    @Column(name = "date_reminder", nullable = false)
    private Date dateReminder;

    @Column(name = "content_reminder", nullable = false)
    private String contentReminder;

    @ManyToOne
    @JoinColumn(name = "fk_id_user", nullable = false)
    private User user;
}
