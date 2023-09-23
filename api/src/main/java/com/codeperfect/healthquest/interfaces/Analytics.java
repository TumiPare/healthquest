package com.codeperfect.healthquest.interfaces;

import java.util.List;

import lombok.Data;

@Data
public class Analytics {
    
    List<AnalyticData> userViews;
    List<AnalyticData> ads;
    List<DemographicData> demographicByAge;
    List<DemographicData> demographicByGender;
    List<DemographicData> demographicByNationality;

}
