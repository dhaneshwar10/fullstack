package com.birthdayevent.dhanesh.UserRepository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.birthdayevent.dhanesh.model.EventDetails;



public interface EdetailsRepository extends JpaRepository<EventDetails,Long>{

}