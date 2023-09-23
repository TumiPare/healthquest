package com.codeperfect.healthquest.services;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.MatchOperation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;

import com.codeperfect.healthquest.interfaces.UserStat;
import com.codeperfect.healthquest.models.UserViewed;
import com.codeperfect.healthquest.repositories.UserViewedRepository;

@Service
public class UserViewedService {
    
    @Autowired
    UserViewedRepository UserViewedRepository;

    @Autowired
    MongoTemplate mongoTemplate;

    public void saveUserViewed(UserViewed userViewed) {

        Calendar startDate = new GregorianCalendar();
        startDate.set(Calendar.HOUR_OF_DAY, 0);
        startDate.set(Calendar.MINUTE, 0);
        startDate.set(Calendar.SECOND, 0);
        startDate.set(Calendar.MILLISECOND, 0);
        
        Calendar endDate = new GregorianCalendar();
        endDate.setTime(startDate.getTime());
        endDate.add(Calendar.DATE, 1);

        MatchOperation filterUserViewed = Aggregation.match(Criteria.where("date").gte(startDate.getTime()).lt(endDate.getTime()).and("username").is(userViewed.getUsername()));
        Aggregation aggregation = Aggregation.newAggregation(filterUserViewed);

        AggregationResults<UserViewed> result = mongoTemplate.aggregate(aggregation, "user-viewed", UserViewed.class);

        if (result.getUniqueMappedResult() == null) {
            UserViewedRepository.save(userViewed);
        }
    }

}
