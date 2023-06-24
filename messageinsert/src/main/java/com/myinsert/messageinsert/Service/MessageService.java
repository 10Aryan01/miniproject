package com.myinsert.messageinsert.Service;

import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.myinsert.messageinsert.Entity.MessageEntity;

@Service
public interface MessageService extends CrudRepository<MessageEntity,Long> {
    @Procedure(name="Insert_Mgg")
    void Insert_Mgg(String mgg,int us1,int us2);

    default void Insert_Mgg(MessageEntity me) {
        Insert_Mgg(me.getMgg(), me.getUs1(), me.getUs2());
    }
}