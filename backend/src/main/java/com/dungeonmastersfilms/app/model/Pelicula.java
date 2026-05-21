package com.dungeonmastersfilms.app.model;

import jakarta.persistence.*;

@Entity
public class Pelicula {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;
    private int anio;

    @ManyToOne
    @JoinColumn(name = "genero_id")
    private Genero genero;

    public Pelicula() {}

    public Pelicula(String titulo, int anio, Genero genero) {
        this.titulo = titulo;
        this.anio = anio;
        this.genero = genero;
    }

    // Getters y setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitulo() { return titulo; }
    public void setTitulo(String titulo) { this.titulo = titulo; }

    public int getAnio() { return anio; }
    public void setAnio(int anio) { this.anio = anio; }

    public Genero getGenero() { return genero; }
    public void setGenero(Genero genero) { this.genero = genero; }
}
