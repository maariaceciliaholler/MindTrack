package com.devmindtrack.mindtrack.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devmindtrack.mindtrack.models.Label;

public interface LabelRepository extends JpaRepository<Label, Long>{

}
