package com.birthdayevent.dhanesh.service.impl;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.birthdayevent.dhanesh.service.AuthenticationService;
import com.birthdayevent.dhanesh.UserRepository.UserRepository;
import com.birthdayevent.dhanesh.dto.request.LoginRequest;
import com.birthdayevent.dhanesh.dto.request.RegisterRequest;
import com.birthdayevent.dhanesh.dto.response.LoginResponse;
import com.birthdayevent.dhanesh.dto.response.RegisterResponse;
import com.birthdayevent.dhanesh.enumerated.Role;
import com.birthdayevent.dhanesh.model.User;
import com.birthdayevent.dhanesh.utils.jwtUtils;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor


    public class AuthenticationServiceimpl implements AuthenticationService {


    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final jwtUtils jwtUtil;




    @Override
    public RegisterResponse register(RegisterRequest request){
        Optional<User> isUserExists = userRepository.findByEmail(request.getEmail());
        if(isUserExists.isPresent()){
            return RegisterResponse.builder().message("User with mail id "+ request.getEmail()+" is already exists!").build();
        }
           
    var user =User.builder()
        .name(request.getName())
        .email(request.getEmail())
        .password(passwordEncoder.encode(request.getPassword()))
        .role(Role.USER)
        .build();
    userRepository.save(user);
    return RegisterResponse.builder().message("User created successfully!").build();
    }

    @Override
    public LoginResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        String token = jwtUtil.generateToken(user);
        return LoginResponse.builder().message("User logged in successfully!")
                                        .token(token)
                                        .build();
       
    }
}


