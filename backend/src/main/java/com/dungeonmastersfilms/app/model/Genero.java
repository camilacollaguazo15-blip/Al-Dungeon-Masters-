package com.dungeonmastersfilms.app.model;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;

@Entity
@Table(name = "Generos")
public class Genero {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_genero; 

    private String nombre_genero; 

    @OneToMany(mappedBy = "genero", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("genero")
    private List<Pelicula> peliculas;

    public Genero() {}

    public Long getId_genero() { return id_genero; }
    public void setId_genero(Long id_genero) { this.id_genero = id_genero; }

    public String getNombre_genero() { return nombre_genero; }
    public void setNombre_genero(String nombre_genero) { this.nombre_genero = nombre_genero; }

    public List<Pelicula> getPeliculas() { return peliculas; }
    public void setPeliculas(List<Pelicula> peliculas) { this.peliculas = peliculas; }
}
