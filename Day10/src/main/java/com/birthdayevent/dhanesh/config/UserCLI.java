package com.birthdayevent.dhanesh.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.data.convert.ReadingConverter;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.birthdayevent.dhanesh.UserRepository.UserRepository;
import com.birthdayevent.dhanesh.enumerated.Role;
import com.birthdayevent.dhanesh.model.User;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor

public class UserCLI implements CommandLineRunner {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    @Override
    public void run(String...args) throws Exception{
        if(userRepository.count()>0)
            return;


        var user =User.builder()
                .name("Admin")
                .email("admin@gmail.com")
                .password(passwordEncoder.encode("admin@123"))
                .role(Role.ADMIN)
                .build();
        userRepository.save(user);
    }
}
