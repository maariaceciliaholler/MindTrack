package com.devmindtrack.mindtrack.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devmindtrack.mindtrack.models.TrackListItem;

public interface TrackListItemRepository extends JpaRepository<TrackListItem, Long> {

}
