package com.birthdayevent.dhanesh.service;

import com.birthdayevent.dhanesh.dto.request.BookRequest;
import com.birthdayevent.dhanesh.dto.response.BasicResponse;
import com.birthdayevent.dhanesh.dto.response.BookResponse;

public interface bookService {

    BasicResponse<BookResponse> getAllUser();
    BasicResponse<BookResponse> deletebooking(Long id);
    BasicResponse<BookResponse> updateBooking(Long bookingId, BookRequest request);

}
