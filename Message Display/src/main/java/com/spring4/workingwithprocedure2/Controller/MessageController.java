package com.spring4.workingwithprocedure2.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.spring4.workingwithprocedure2.Entity.MEssageEn;
import com.spring4.workingwithprocedure2.Service.Mservice;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class MessageController {

    @Autowired
    Mservice MServ;

    @GetMapping("/Message/{ID}")
    public List<MEssageEn> getMessage(@PathVariable Integer ID) {
        List<MEssageEn> messages = MServ.getMessage(ID);
        return messages;
    }

}
