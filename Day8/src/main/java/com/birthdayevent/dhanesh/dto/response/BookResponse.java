package com.birthdayevent.dhanesh.dto.response;

import java.sql.Time;
import java.util.Date;

import com.birthdayevent.dhanesh.model.Booking;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookResponse {
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