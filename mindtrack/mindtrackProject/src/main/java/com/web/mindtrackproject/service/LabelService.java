package com.web.mindtrackproject.service;

import com.web.mindtrackproject.entity.Label;
import com.web.mindtrackproject.repository.LabelRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class LabelService {
    private final LabelRepository labelRepository;

    public List<Label> getAllLabels() {
        return labelRepository.findAll();
    }

    public Optional<Label> getLabelById(Long id) {
        return labelRepository.findById(id);
    }

    public Label createLabel(Label label) {
        return labelRepository.save(label);
    }

    public Label updateLabel(Long id, Label label) {
        if (labelRepository.existsById(id)) {
            label.setId_label(id);
            return labelRepository.save(label);
        }
        return null;
    }

    public void deleteLabel(Long id) {
        labelRepository.deleteById(id);
    }
}
