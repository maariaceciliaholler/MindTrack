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
@Table(name = "tb_user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_user;

    private String name_user;

    private String email_user;

    private String password_user;

    public String getName() {
        return this.name_user;
    }

    public String getEmail() {
        return this.email_user;
    }

    public String getPassword() {
        return this.password_user;
    }

    public void setPassword(String password) {
        this.password_user = password;
    }

    public void setEmail(String email) {
        this.email_user = email;
    }

    public void setName(String name) {
        this.name_user = name;
    }
}

