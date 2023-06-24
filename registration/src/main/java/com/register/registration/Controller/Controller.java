package com.register.registration.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.register.registration.Entity.Model;
import com.register.registration.Service.service;



@RestController
@CrossOrigin(origins ={"http://127.0.0.1:5500","http://127.0.0.1:5501","http://127.0.0.1:5502","http://localhost:3000/"})
public class Controller {
    @Autowired
    private service mr;

    @PostMapping("/adduser")
    public String  register(@RequestBody Model me)
    {
        mr.register(me.getName());
        return "Data sent Successfully";
    }
    
}
