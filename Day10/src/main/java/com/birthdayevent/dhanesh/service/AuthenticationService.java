package com.birthdayevent.dhanesh.service;

import com.birthdayevent.dhanesh.dto.request.LoginRequest;
import com.birthdayevent.dhanesh.dto.request.RegisterRequest;
import com.birthdayevent.dhanesh.dto.response.LoginResponse;
import com.birthdayevent.dhanesh.dto.response.RegisterResponse;

public interface AuthenticationService {
RegisterResponse register (RegisterRequest request);

    LoginResponse login(LoginRequest request);
}
