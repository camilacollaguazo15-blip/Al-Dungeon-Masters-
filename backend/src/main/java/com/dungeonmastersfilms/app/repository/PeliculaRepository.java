package com.dungeonmastersfilms.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.dungeonmastersfilms.app.model.Pelicula;

public interface PeliculaRepository extends JpaRepository<Pelicula, Long> {
}
