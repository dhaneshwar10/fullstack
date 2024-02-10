package com.birthdayevent.dhanesh.UserRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.birthdayevent.dhanesh.model.Booking;

public interface BookRepository extends JpaRepository<Booking,Long> {

}