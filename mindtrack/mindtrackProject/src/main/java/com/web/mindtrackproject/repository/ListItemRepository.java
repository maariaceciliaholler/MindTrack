package com.web.mindtrackproject.repository;

import com.web.mindtrackproject.entity.ListItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ListItemRepository extends JpaRepository<ListItem,Long> {

}
