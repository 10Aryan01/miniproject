package com.spring4.workingwithprocedure2.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring4.workingwithprocedure2.Repository.MessageRepo;
import com.spring4.workingwithprocedure2.Entity.MEssageEn;

@Service
public class Mservice {
    @Autowired
    MessageRepo Mrepository;


    public List<MEssageEn> getMessage(Integer ID)
    {
        return Mrepository.getMessage(ID);
    }
}
