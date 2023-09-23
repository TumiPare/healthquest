package com.codeperfect.healthquest.services;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.DateOperators;
import org.springframework.data.mongodb.core.aggregation.GroupOperation;
import org.springframework.data.mongodb.core.aggregation.ProjectionOperation;
import org.springframework.data.mongodb.core.mapping.Document;
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
        
        analytics.setDemographicByNationality(resultsNationality.getMappedResults());

        // Add Age Analytics
        // ProjectionOperation projectForAges = Aggregation.project("dob")
        //     .and(DateOperators.Year.yearOf("dob")).as("yearOfBirth");

        // // GroupOperation groupByAge = Aggregation.group("yearOfBirth").count().as("count");

        // projectToMatchModel = Aggregation.project()
        //     .andExpression("_id").as("group")
        //     .andExpression("count").as("value");

        // aggregation = Aggregation.newAggregation(projectForAges, projectToMatchModel);

        // AggregationResults<DemographicData> resultsAge = mongoTemplate.aggregate(aggregation, "user", DemographicData.class);
        
        // System.out.println(resultsAge.getRawResults());
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
        GroupOperation groupByStatus = Aggregation.group("status", "timestamp").count().as("count");
        
        projectToMatchModel = Aggregation.project()
            .andExpression("status").as("type")
            .andExpression("timestamp").as("date")
            .andExpression("count").as("value");
        
        aggregation = Aggregation.newAggregation(groupByStatus, projectToMatchModel);

        AggregationResults<AnalyticData> resultsAd = mongoTemplate.aggregate(aggregation, "ad", AnalyticData.class);

        analytics.setAds(resultsAd.getMappedResults());

        // Add User Views Analytics
        ProjectionOperation projectForMonth = Aggregation.project("date")
            .and(DateOperators.Month.monthOf("date")).as("month");

        GroupOperation groupByDate = Aggregation.group("month").count().as("count");
        
        projectToMatchModel = Aggregation.project()
            .andExpression("_id").as("type")
            .andExpression("count").as("value");
        
        aggregation = Aggregation.newAggregation(projectForMonth, groupByDate, projectToMatchModel);

        AggregationResults<AnalyticData> resultsViews = mongoTemplate.aggregate(aggregation, "user-viewed", AnalyticData.class);

        analytics.setUserViews(resultsViews.getMappedResults());

        return analytics;
    }

}
