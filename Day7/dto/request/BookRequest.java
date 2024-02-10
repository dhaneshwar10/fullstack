package com.birthdayevent.dhanesh.dto.request;


import java.util.Date;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookRequest {
    private long bookingId;
    private String eventName;
    private String eventLocation;
    private String applicantName;
    private Date date;
    private int numberOfPeople;
    private long mobileNumber;
    private String emailId;
    private String address;
    private String time;
    private String shows;
    
}