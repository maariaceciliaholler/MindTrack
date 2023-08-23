package com.devmindtrack.mindtrack.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devmindtrack.mindtrack.models.Reminder;

public interface ReminderRepository extends JpaRepository<Reminder, Long> {

}
