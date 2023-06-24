
#Sql Procedure to get Interaction for a particular User using User ID
``` sql
create procedure My_Interaction(ID int)
begin
select Thread_id as Thread,Message_id,Reciever_User_id as User_1,
Sender_User_id AS User_2,'Recieved' as Type,Date_Time as Time_stamp,Message_Content as Message from message
where
Reciever_User_id=ID
Union
select Thread_id as Thread,Message_id,Sender_User_id as User_1,
Reciever_User_id AS User_2,'Sent' as Type,Date_Time as Time_stamp,Message_Content as Message from message
where
Sender_User_id=ID Order by 1,6  ASC;
end
``` 

#Sql Procedure to Insert Messages between two users
```sql
Create procedure Insert_Mgg(mgg Text,us1 INT,us2 INT)
begin
declare th int;

select Thread_id  into th from thread where User_A in (us1,us2) and User_B in (us1,us2) ;

if(th IS NULL) THEN
insert into thread (User_A,User_B) Values (us1,us2);
select Thread_id  into th from thread where User_A in (us1,us2) and User_B in (us1,us2) ;
insert into message(Thread_id,Sender_User_id,Message_type,Message_Content,Date_Time,Reciever_User_id) values(th,us1,"Text",mgg,now(),us2);

Else
insert into message(Thread_id,Sender_User_id,Message_type,Message_Content,Date_Time,Reciever_User_id) values(th,us1,"Text",mgg,now(),us2);
End if;
end
```

#Sql Procedure for Registration
```sql
create procedure register(name char)
begin
insert into user (user_name) values (name);
end 
```


#Sql procedure for Getting all the registered users from database
```sql
create procedure Get_User()
begin
select * from user;
end 
```