package com.register.registration.Service;

import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.register.registration.Entity.Model;



@Service
public interface service extends CrudRepository<Model,Long> {
    @Procedure(name="register")
    void register(String name);

    default void Insert_Mgg(Model me) {
        register(me.getName());
    }
}