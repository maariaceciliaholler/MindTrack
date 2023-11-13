package com.web.mindtrackproject.service;

import com.web.mindtrackproject.entity.Reminder;
import com.web.mindtrackproject.repository.ReminderRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ReminderService {
    private final ReminderRepository reminderRepository;

    public Reminder createReminder(Reminder reminder) {
        return reminderRepository.save(reminder);
    }

    public void deleteReminder(Long id) {
        reminderRepository.deleteById(id);
    }

    public Reminder updateReminder(Long id, Reminder reminder) {
        if (reminderRepository.existsById(id)) {
            return reminderRepository.save(reminder);
        }
        return null;
    }

    public Reminder updateReminderStatus(Reminder reminder) {
        if (reminderRepository.existsById(reminder.getId())) {
            return reminderRepository.save(reminder);
        }
        return null;
    }

    public Reminder updateReminderContent(Reminder reminder) {
        if (reminderRepository.existsById(reminder.getId())) {
            return reminderRepository.save(reminder);
        }
        return null;
    }

    public Optional<Reminder> getReminderById(Long id) {
        return reminderRepository.findById(id);
    }

    public List<Reminder> getAllRemindersForUser(Long userId) {
        return reminderRepository.getUserReminders(userId);
    }
}
