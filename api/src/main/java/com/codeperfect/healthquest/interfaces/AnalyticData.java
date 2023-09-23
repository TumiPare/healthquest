package com.codeperfect.healthquest.interfaces;

import java.util.Date;

import lombok.Data;

@Data
public class AnalyticData {
    
    String type;
    Integer value;
    Date startDate;
    Date endDate;

}
