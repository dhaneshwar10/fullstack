package com.birthdayevent.dhanesh.service;

import com.birthdayevent.dhanesh.dto.response.BasicResponse;
import com.birthdayevent.dhanesh.dto.response.UserResponse;

public interface UserService {

    BasicResponse<UserResponse> getAllUser();
}
