package com.codeperfect.healthquest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class HealthquestApplication {

	public static void main(String[] args) {
		SpringApplication.run(HealthquestApplication.class, args);
	}

}
