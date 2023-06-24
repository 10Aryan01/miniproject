package com.spring4.workingwithprocedure2.Entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
// @Table(name="message")
public class MEssageEn{
    @Column
    private int Thread;
    @Id
    @Column
    private String Message_id;
    @Column
    private int User_1;
    @Column
    private int User_2;
    @Column
    private String Type;
    @Column
    private String Time_stamp;
    @Column
    private String Message;
    public MEssageEn() {
    }
    public MEssageEn(int thread, String message_id, int user_1, int user_2, String type, String time_stamp,
            String message) {
        Thread = thread;
        Message_id = message_id;
        User_1 = user_1;
        User_2 = user_2;
        Type = type;
        Time_stamp = time_stamp;
        Message = message;
    }
    public int getThread() {
        return Thread;
    }
    public void setThread(int thread) {
        Thread = thread;
    }
    public String getMessage_id() {
        return Message_id;
    }
    public void setMessage_id(String message_id) {
        Message_id = message_id;
    }
    public int getUser_1() {
        return User_1;
    }
    public void setUser_1(int user_1) {
        User_1 = user_1;
    }
    public int getUser_2() {
        return User_2;
    }
    public void setUser_2(int user_2) {
        User_2 = user_2;
    }
    public String getType() {
        return Type;
    }
    public void setType(String type) {
        Type = type;
    }
    public String getTime_stamp() {
        return Time_stamp;
    }
    public void setTime_stamp(String time_stamp) {
        Time_stamp = time_stamp;
    }
    public String getMessage() {
        return Message;
    }
    public void setMessage(String message) {
        Message = message;
    }
    @Override
    public String toString() {
        return "MEssageEn [Thread=" + Thread + ", Message_id=" + Message_id + ", User_1=" + User_1 + ", User_2="
                + User_2 + ", Type=" + Type + ", Time_stamp=" + Time_stamp + ", Message=" + Message + "]";
    }
    
}
