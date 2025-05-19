package com.Alquiler.Proyecto.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Alquiler.Proyecto.Entity.Multa;
import com.Alquiler.Proyecto.repository.MultaRepository;

@Service
public class MultaService {

    @Autowired
    private MultaRepository multaRepository;

    public List<Multa> findAll() {
        return multaRepository.findAll();
    }

    public Optional<Multa> findById(Long id) {
        return multaRepository.findById(id);
    }

    public Multa save(Multa multa) {
        return multaRepository.save(multa);
    }

    public void deleteById(Long id) {
        multaRepository.deleteById(id);
    }
}