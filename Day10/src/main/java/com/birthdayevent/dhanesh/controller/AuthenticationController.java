package com.birthdayevent.dhanesh.controller;

import static com.birthdayevent.dhanesh.utils.MyConstant.AUTH;
import static com.birthdayevent.dhanesh.utils.MyConstant.REGISTER;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.birthdayevent.dhanesh.service.AuthenticationService;
import com.birthdayevent.dhanesh.dto.request.LoginRequest;
import com.birthdayevent.dhanesh.dto.request.RegisterRequest;
import com.birthdayevent.dhanesh.dto.response.LoginResponse;
import com.birthdayevent.dhanesh.dto.response.RegisterResponse;
import com.birthdayevent.dhanesh.utils.MyConstant;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(AUTH)
@RequiredArgsConstructor
public class AuthenticationController {
private final AuthenticationService authenticationService;

    @PostMapping(REGISTER)
    public ResponseEntity<RegisterResponse> register (@RequestBody RegisterRequest request){
        RegisterResponse response = new RegisterResponse();
        try{
            response = authenticationService.register(request);
            return new ResponseEntity<>(response,HttpStatus.ACCEPTED);
        }
        catch(Exception e){
            response.setMessage("Something went wrong");
            return new ResponseEntity<>(response,HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PostMapping(MyConstant.LOGIN)
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request){
        LoginResponse response = new LoginResponse();
        try{
            response = authenticationService.login(request);
            return new ResponseEntity<>(response,HttpStatus.ACCEPTED);

        }
        catch(Exception e){
            System.out.println(e);
            response.setMessage("Something went wrong!");
            response.setToken("");
            return new ResponseEntity<>(response,HttpStatus.EXPECTATION_FAILED);
        }
    }
}
