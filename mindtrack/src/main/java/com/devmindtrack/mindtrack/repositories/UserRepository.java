package com.devmindtrack.mindtrack.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devmindtrack.mindtrack.models.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
