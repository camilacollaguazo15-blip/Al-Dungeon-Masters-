package com.dungeonmastersfilms.app.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Peliculas") 
public class Pelicula {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_pelicula; 

    private String nombre_pelicula; 

    @Column(columnDefinition = "TEXT") 
    private String descripcion;

    private Double imdb_rating; 

    @ManyToOne
    @JoinColumn(name = "id_genero") 
    private Genero genero;

    public Pelicula() {}

    public Pelicula(String nombre_pelicula, String descripcion, Double imdb_rating, Genero genero) {
        this.nombre_pelicula = nombre_pelicula;
        this.descripcion = descripcion;
        this.imdb_rating = imdb_rating;
        this.genero = genero;
    }

    public Long getId_pelicula() { return id_pelicula; }
    public void setId_pelicula(Long id_pelicula) { this.id_pelicula = id_pelicula; }

    public String getNombre_pelicula() { return nombre_pelicula; }
    public void setNombre_pelicula(String nombre_pelicula) { this.nombre_pelicula = nombre_pelicula; }

    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }

    public Double getImdb_rating() { return imdb_rating; }
    public void setImdb_rating(Double imdb_rating) { this.imdb_rating = imdb_rating; }

    public Genero getGenero() { return genero; }
    public void setGenero(Genero genero) { this.genero = genero; }
}
