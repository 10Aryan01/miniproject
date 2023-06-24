package com.spring4.workingwithprocedure2.Repository;

import java.util.List;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;

import com.spring4.workingwithprocedure2.Entity.MEssageEn;

@Repository
public interface MessageRepo extends CrudRepository<MEssageEn,Integer>
{
    
    @Query(value="call My_Interaction(?)",nativeQuery=true)
    public List<MEssageEn> getMessage(Integer ID);
   
}


