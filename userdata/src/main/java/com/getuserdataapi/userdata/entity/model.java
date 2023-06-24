package com.getuserdataapi.userdata.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Entity
public class model {
    
    @Id
    @Column
    private int User_id;

    @Column
    private String User_name;

    public model() {
    }

    public model(int user_id, String user_name) {
        User_id = user_id;
        User_name = user_name;
    }

    public int getUser_id() {
        return User_id;
    }

    public void setUser_id(int user_id) {
        User_id = user_id;
    }

    public String getUser_name() {
        return User_name;
    }

    public void setUser_name(String user_name) {
        User_name = user_name;
    }

    @Override
    public String toString() {
        return "model [User_id=" + User_id + ", User_name=" + User_name + "]";
    }

    
    
}
