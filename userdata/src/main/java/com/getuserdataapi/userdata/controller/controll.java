package com.getuserdataapi.userdata.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.getuserdataapi.userdata.entity.model;

import com.getuserdataapi.userdata.service.service;

@RestController
@CrossOrigin(origins={"http://localhost:3000","http://localhost:8080/Message/user"})
public class controll {
    @Autowired
    service ms;
    @RequestMapping("/Message/user")
    public List<model>Get_User()
    {
        return ms.Get_User();

    }
    
}
