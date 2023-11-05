package com.web.mindtrackproject.service;

import com.web.mindtrackproject.entity.ListItem;
import com.web.mindtrackproject.repository.ListItemRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ListItemService {
    private final ListItemRepository listItemRepository;

    public List<ListItem> getAllListItems() {
        return listItemRepository.findAll();
    }

    public Optional<ListItem> getListItemById(Long id) {
        return listItemRepository.findById(id);
    }

    public ListItem createListItem(ListItem listItem) {
        return listItemRepository.save(listItem);
    }

    public ListItem updateListItem(Long id, ListItem listItem) {
        if (listItemRepository.existsById(id)) {
            listItem.setId_item(id);
            return listItemRepository.save(listItem);
        }
        return null;
    }

    public void deleteListItem(Long id) {
        listItemRepository.deleteById(id);
    }
}
