package com.birthdayevent.dhanesh.model;

import java.sql.Time;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name = "booking")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;

    @Column(name = "event_name", nullable = false)
    private String eventName;

    @Column(name = "event_location", nullable = false)
    private String eventLocation;

    @Column(name = "applicant_name", nullable = false)
    private String applicantName;

    @Column(nullable = false)
    private Date date;

    @Column(name = "number_of_people", nullable = false)
    private int numberOfPeople;

    @Column(name = "mobile_number", nullable = false)
    private long mobileNumber;

    @Column(nullable = false)
    private String emailId;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String time;

    @Column(nullable = false)
    private String shows;

}
