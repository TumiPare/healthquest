package com.codeperfect.healthquest.models;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;

@Data
@Document("token")
public class Token {
    public String ID;
    public String firstName;
    public String lastName;
    @Id
    public String token;
}
