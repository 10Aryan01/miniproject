package com.myinsert.messageinsert.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.myinsert.messageinsert.Entity.MessageEntity;
import com.myinsert.messageinsert.Service.MessageService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

     @MessageMapping("/adddata")
     @SendTo("/topics/message")
     public String handleUpdateData(MessageEntity message) {
        messageService.Insert_Mgg(message.getMgg(), message.getUs1(), message.getUs2());
        // messagingTemplate.convertAndSend("/topic/newMessage", "Message sent!");
        System.out.println(message);
        return ("Message sent!"+ message);
     }

    

}
