package com.web.mindtrackproject.service;

import com.web.mindtrackproject.entity.TrackListItem;
import com.web.mindtrackproject.repository.TrackListItemRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TrackListItemService {
    private final TrackListItemRepository trackListItemRepository;

    public List<TrackListItem> getAllTrackListItems() {
        return trackListItemRepository.findAll();
    }

    public Optional<TrackListItem> getTrackListItemById(Long id) {
        return trackListItemRepository.findById(id);
    }

    public TrackListItem createTrackListItem(TrackListItem trackListItem) {
        return trackListItemRepository.save(trackListItem);
    }

    public TrackListItem updateTrackListItem(Long id, TrackListItem trackListItem) {
        if (trackListItemRepository.existsById(id)) {
            return trackListItemRepository.save(trackListItem);
        }
        return null;
    }

    public void deleteTrackListItem(Long id) {
        trackListItemRepository.deleteById(id);
    }
}
