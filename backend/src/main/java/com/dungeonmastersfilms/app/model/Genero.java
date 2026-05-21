package com.dungeonmastersfilms.app.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Genero {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    @OneToMany(mappedBy = "genero", cascade = CascadeType.ALL)
    private List<Pelicula> peliculas;

    public Genero() {}

    public Genero(String nombre) {
        this.nombre = nombre;
    }

    // Getters y setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public List<Pelicula> getPeliculas() { return peliculas; }
    public void setPeliculas(List<Pelicula> peliculas) { this.peliculas = peliculas; }
}
