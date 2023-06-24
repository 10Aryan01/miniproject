package com.spring4.workingwithprocedure2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;



@CrossOrigin(origins = "http://localhost:3000")
@SpringBootApplication
public class Workingwithprocedure2Application {

	public static void main(String[] args) {
		SpringApplication.run(Workingwithprocedure2Application.class, args);
	}
}



