package com.web.mindtrackproject.controller;

import com.web.mindtrackproject.entity.ListItem;
import com.web.mindtrackproject.service.ListItemService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/listItem")
@AllArgsConstructor
public class ListItemController {
    private final ListItemService listItemService;

    @GetMapping
    public ResponseEntity<List<ListItem>> getAllListItems() {
        List<ListItem> listItems = listItemService.getAllListItems();
        return ResponseEntity.ok(listItems);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ListItem> getListItemById(@PathVariable Long id) {
        Optional<ListItem> listItem = listItemService.getListItemById(id);
        return listItem.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<ListItem> createListItem(@RequestBody ListItem listItem) {
        ListItem createdListItem = listItemService.createListItem(listItem);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdListItem);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ListItem> updateListItem(@PathVariable Long id, @RequestBody ListItem listItem) {
        ListItem updatedListItem = listItemService.updateListItem(id, listItem);
        if (updatedListItem != null) {
            return ResponseEntity.ok(updatedListItem);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteListItem(@PathVariable Long id) {
        listItemService.deleteListItem(id);
        return ResponseEntity.noContent().build();
    }
}
