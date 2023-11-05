package com.web.mindtrackproject.controller;

import com.web.mindtrackproject.entity.TrackListItem;
import com.web.mindtrackproject.service.TrackListItemService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/trackListItem")
@AllArgsConstructor
public class TrackListItemController {
    private final TrackListItemService trackListItemService;

    @GetMapping
    public ResponseEntity<List<TrackListItem>> getAllTrackListItems() {
        List<TrackListItem> trackListItems = trackListItemService.getAllTrackListItems();
        return ResponseEntity.ok(trackListItems);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TrackListItem> getTrackListItemById(@PathVariable Long id) {
        Optional<TrackListItem> trackListItem = trackListItemService.getTrackListItemById(id);
        return trackListItem.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<TrackListItem> createTrackListItem(@RequestBody TrackListItem trackListItem) {
        TrackListItem createdTrackListItem = trackListItemService.createTrackListItem(trackListItem);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTrackListItem);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TrackListItem> updateTrackListItem(@PathVariable Long id, @RequestBody TrackListItem trackListItem) {
        TrackListItem updatedTrackListItem = trackListItemService.updateTrackListItem(id, trackListItem);
        if (updatedTrackListItem != null) {
            return ResponseEntity.ok(updatedTrackListItem);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTrackListItem(@PathVariable Long id) {
        trackListItemService.deleteTrackListItem(id);
        return ResponseEntity.noContent().build();
    }
}
