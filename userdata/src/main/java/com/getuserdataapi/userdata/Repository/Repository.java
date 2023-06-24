package com.getuserdataapi.userdata.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.getuserdataapi.userdata.entity.model;

public interface Repository extends CrudRepository<model,Integer> {
    
    @Query(value="call Get_User()",nativeQuery=true)
    public List<model>Get_User();
}
