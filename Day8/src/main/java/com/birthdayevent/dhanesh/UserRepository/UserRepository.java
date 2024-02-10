package com.birthdayevent.dhanesh.UserRepository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.birthdayevent.dhanesh.model.User;



public interface UserRepository extends JpaRepository<User,String> {
    Optional<User>  findByEmail(String email);
}
