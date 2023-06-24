package com.getuserdataapi.userdata.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.getuserdataapi.userdata.Repository.Repository;
import com.getuserdataapi.userdata.entity.model;

@Service
public class service{
    
    @Autowired
    Repository Mr;
    public List<model>Get_User()
    {
        return  Mr.Get_User();
    }

}
