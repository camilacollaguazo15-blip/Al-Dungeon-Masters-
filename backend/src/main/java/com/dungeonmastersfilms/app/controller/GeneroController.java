package com.dungeonmastersfilms.app.controller;

import com.dungeonmastersfilms.app.model.Genero;
import com.dungeonmastersfilms.app.model.Pelicula;
import com.dungeonmastersfilms.app.repository.GeneroRepository;
import com.dungeonmastersfilms.app.repository.PeliculaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/generos")
@CrossOrigin(origins = "*")
public class GeneroController {

    private final GeneroRepository generoRepository;
    private final PeliculaRepository peliculaRepository;

    public GeneroController(GeneroRepository generoRepository, PeliculaRepository peliculaRepository) {
        this.generoRepository = generoRepository;
        this.peliculaRepository = peliculaRepository;
    }

    @GetMapping
    public List<Genero> getAllGeneros() {
        return generoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Genero getGeneroById(@PathVariable Long id) {
        return generoRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Genero createGenero(@RequestBody Genero genero) {
        return generoRepository.save(genero);
    }

    @GetMapping("/{id}/peliculas")
    public List<Pelicula> getPeliculasByGenero(@PathVariable Long id) {
        return peliculaRepository.findAll()
                .stream()
                .filter(p -> p.getGenero() != null && p.getGenero().getId_genero().equals(id))
                .toList();
    }
}
