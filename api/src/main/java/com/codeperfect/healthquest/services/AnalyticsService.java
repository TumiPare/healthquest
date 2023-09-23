package com.codeperfect.healthquest.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.GroupOperation;
import org.springframework.data.mongodb.core.aggregation.ProjectionOperation;
import org.springframework.stereotype.Service;

import com.codeperfect.healthquest.interfaces.AnalyticData;
import com.codeperfect.healthquest.interfaces.Analytics;
import com.codeperfect.healthquest.interfaces.AnalyticsOptions;
import com.codeperfect.healthquest.interfaces.DemographicData;

@Service
public class AnalyticsService {

    @Autowired
    MongoTemplate mongoTemplate;
    
    public Analytics getAnalytics(AnalyticsOptions analyticsOptions) {

        Analytics analytics = new Analytics();
        
        // Add Nationality Analytics
        GroupOperation groupByNationality = Aggregation.group("nationality").count().as("count");
        
        ProjectionOperation projectToMatchModel = Aggregation.project()
            .andExpression("_id").as("group")
            .andExpression("count").as("value");
        
        Aggregation aggregation = Aggregation.newAggregation(groupByNationality, projectToMatchModel);

        AggregationResults<DemographicData> resultsNationality = mongoTemplate.aggregate(aggregation, "user", DemographicData.class);
        
        System.out.println(resultsNationality.getRawResults());
        analytics.setDemographicByNationality(resultsNationality.getMappedResults());

        // Add Age Analytics
        // ProjectionOperation projectForAges = Aggregation.project()
        //     .andExpression("dob").as("age");

        // GroupOperation groupByAge = Aggregation.group("username").count().as("count");

        // projectToMatchModel = Aggregation.project()
        //     .andExpression("username").as("group")
        //     .andExpression("count").as("value");

        // aggregation = Aggregation.newAggregation(groupByAge, projectToMatchModel);

        // AggregationResults<DemographicData> resultsAge = mongoTemplate.aggregate(aggregation, "user", DemographicData.class);
        
        // analytics.setDemographicByAge(resultsAge.getMappedResults());

        // Add Gender Analytics
        GroupOperation groupByGender = Aggregation.group("gender").count().as("count");
        
        projectToMatchModel = Aggregation.project()
            .andExpression("_id").as("group")
            .andExpression("count").as("value");

        
        aggregation = Aggregation.newAggregation(groupByGender, projectToMatchModel);

        AggregationResults<DemographicData> resultsGender = mongoTemplate.aggregate(aggregation, "user", DemographicData.class);
        
        analytics.setDemographicByGender(resultsGender.getMappedResults());

        // Add Ad Analytics
        GroupOperation groupByStatus = Aggregation.group("status").count().as("count");
        
        projectToMatchModel = Aggregation.project()
            .andExpression("_id").as("type")
            .andExpression("count").as("value");
        
        aggregation = Aggregation.newAggregation(groupByStatus, projectToMatchModel);

        AggregationResults<AnalyticData> resultsAd = mongoTemplate.aggregate(aggregation, "ad", AnalyticData.class);

        analytics.setAds(resultsAd.getMappedResults());

        // Add User Views Analytics
        GroupOperation groupByDate = Aggregation.group("date").count().as("count");
        
        projectToMatchModel = Aggregation.project()
            .andExpression("_id").as("type")
            .andExpression("count").as("value");
        
        aggregation = Aggregation.newAggregation(groupByDate, projectToMatchModel);

        AggregationResults<AnalyticData> resultsViews = mongoTemplate.aggregate(aggregation, "user-viewed", AnalyticData.class);

        analytics.setUserViews(resultsViews.getMappedResults());

        return analytics;
    }

}
