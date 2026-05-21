package com.dungeonmastersfilms.app.controller;

import com.dungeonmastersfilms.app.model.Pelicula;
import com.dungeonmastersfilms.app.repository.PeliculaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/peliculas")
@CrossOrigin(origins = "*")
public class PeliculaController {

    private final PeliculaRepository peliculaRepository;

    public PeliculaController(PeliculaRepository peliculaRepository) {
        this.peliculaRepository = peliculaRepository;
    }

    @GetMapping
    public List<Pelicula> getAllPeliculas() {
        return peliculaRepository.findAll();
    }

    @GetMapping("/{id}")
    public Pelicula getPeliculaById(@PathVariable Long id) {
        return peliculaRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Pelicula createPelicula(@RequestBody Pelicula pelicula) {
        return peliculaRepository.save(pelicula);
    }
}
