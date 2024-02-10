package com.birthdayevent.dhanesh.service;

import com.birthdayevent.dhanesh.dto.request.EdetailsRequest;
import com.birthdayevent.dhanesh.dto.response.BasicResponse;
import com.birthdayevent.dhanesh.dto.response.EdetailsResponse;

public interface EdetailsService {
    BasicResponse<EdetailsResponse>getAllUser();
    BasicResponse<EdetailsResponse> deletebooking(Long id);
    BasicResponse<EdetailsResponse> updateBooking(Long id,EdetailsRequest request);
}
