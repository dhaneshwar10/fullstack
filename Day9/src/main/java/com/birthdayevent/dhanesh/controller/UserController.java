package com.birthdayevent.dhanesh.controller;
import org.springframework.http.HttpStatus;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.birthdayevent.dhanesh.dto.response.BasicResponse;
import com.birthdayevent.dhanesh.dto.response.UserResponse;
import com.birthdayevent.dhanesh.service.UserService;
import com.birthdayevent.dhanesh.utils.MyConstant;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(MyConstant.USER)
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    
   @GetMapping(MyConstant.USERLIST)
   public ResponseEntity<BasicResponse<UserResponse>> getAllUser(){

    BasicResponse<UserResponse> response=new BasicResponse<>();
    try{

        response=userService.getAllUser();
        return new ResponseEntity<>(response,HttpStatus.OK);
    }
    catch(Exception e){

        response.setMessage("Something went wrong");
        return new ResponseEntity<>(response,HttpStatus.EXPECTATION_FAILED);
    }

   }
}