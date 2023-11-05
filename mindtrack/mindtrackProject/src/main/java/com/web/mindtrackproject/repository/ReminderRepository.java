package com.web.mindtrackproject.repository;

import com.web.mindtrackproject.entity.Reminder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReminderRepository extends JpaRepository<Reminder, Long> {

}
