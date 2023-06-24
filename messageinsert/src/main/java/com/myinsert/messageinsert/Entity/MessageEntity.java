package com.myinsert.messageinsert.Entity;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.NamedStoredProcedureQuery;
import jakarta.persistence.ParameterMode;
import jakarta.persistence.StoredProcedureParameter;

@Entity
@NamedStoredProcedureQuery(name = "Insert_Mgg", procedureName = "Insert_Mgg",parameters = {
    @StoredProcedureParameter(mode=ParameterMode.IN,name="mgg",type=String.class ),
    @StoredProcedureParameter(mode=ParameterMode.IN,name="us1",type=Integer.class ),
    @StoredProcedureParameter(mode=ParameterMode.IN,name="us2",type=Integer.class),
})
public class MessageEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonProperty("mgg")
    private String mgg;

    @Column
    private int us1;

    @Column 
    private int us2;

    public MessageEntity() {
    }

    public MessageEntity(Long id, String mgg, int us1, int us2) {
        this.id = id;
        this.mgg = mgg;
        this.us1 = us1;
        this.us2 = us2;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMgg() {
        return mgg;
    }

    public void setMgg(String mgg) {
        this.mgg = mgg;
    }

    public int getUs1() {
        return us1;
    }

    public void setUs1(int us1) {
        this.us1 = us1;
    }

    public int getUs2() {
        return us2;
    }

    public void setUs2(int us2) {
        this.us2 = us2;
    }

    @Override
    public String toString() {
        return "MessageEntity [id=" + id + ", mgg=" + mgg + ", us1=" + us1 + ", us2=" + us2 + "]";
    }
     
        
    

    
    

}
