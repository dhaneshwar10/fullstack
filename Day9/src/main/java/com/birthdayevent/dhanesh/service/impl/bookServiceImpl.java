package com.birthdayevent.dhanesh.service.impl;
import com.birthdayevent.dhanesh.service.bookService;

import java.util.List;

import java.util.stream.Collectors;
import org.springframework.stereotype.Service;

import com.birthdayevent.dhanesh.UserRepository.BookRepository;
import com.birthdayevent.dhanesh.dto.request.BookRequest;
import com.birthdayevent.dhanesh.dto.request.EdetailsRequest;
import com.birthdayevent.dhanesh.dto.response.BasicResponse;
import com.birthdayevent.dhanesh.dto.response.BookResponse;
import com.birthdayevent.dhanesh.dto.response.EdetailsResponse;
import com.birthdayevent.dhanesh.model.Booking;
import com.birthdayevent.dhanesh.model.EventDetails;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class bookServiceImpl implements bookService{

    private final BookRepository bookRepository;
   
    @Override
    public BasicResponse<BookResponse> getAllUser() {
        List<Booking> books=bookRepository.findAll();
       
        List<BookResponse> bookResponses = books.stream()
        .map(book-> BookResponse.builder()

        .bookingId(book.getBookingId())
        // .bookingId(book.getBookingId())
        .eventName(book.getEventName())
        .eventLocation(book.getEventLocation())
        .applicantName(book.getApplicantName())
        .numberOfPeople(book.getNumberOfPeople())
         .mobileNumber(book.getMobileNumber())
        .emailId(book.getEmailId())
        .address(book.getAddress())
        .shows(book.getShows())
        .time(book.getTime())
        .date(book.getDate())
        
        .build())
        .collect(Collectors.toList());
        return BasicResponse.<BookResponse>builder()
        .message("User Data fetched").data(bookResponses).build();
    }

      @Override
        public BasicResponse<BookResponse> deletebooking(Long id) {
            
            if (bookRepository.existsById(id)) {
                bookRepository.deleteById(id);
                return BasicResponse.<BookResponse>builder()
                    .message("Booking deleted successfully")
                    .build();
            } else {
                return BasicResponse.<BookResponse>builder()
                    .message("Booking not found with ID: " + id)
                    .build();
            }
        }

           @Override
        public BasicResponse<BookResponse> updateBooking(Long bookingId, BookRequest request) {
            // Retrieve the existing booking from the repository
            Booking existingBooking = bookRepository.findById(bookingId)
                    .orElseThrow(() -> new RuntimeException("Booking not found with id: " + bookingId));
        
            // Update the booking details
            existingBooking.setEventName(request.getEventName());
            existingBooking.setEventLocation(request.getEventLocation());
            existingBooking.setAddress(request.getAddress());
            existingBooking.setMobileNumber(request.getMobileNumber());
            existingBooking.setDate(request.getDate());
            existingBooking.setApplicantName(request.getApplicantName());
            existingBooking.setNumberOfPeople(request.getNumberOfPeople());
            
            existingBooking.setShows(request.getShows());
            

        
            // Save the updated booking to the repository
            bookRepository.save(existingBooking);
        
            // Construct and return the response
            BookResponse updatedBookingResponse = mapToBookingResponse(existingBooking);
            return BasicResponse.<BookResponse>builder()
                    .message("Booking updated successfully")
                    .data(List.of(updatedBookingResponse)) // Pass a list containing a single updated booking response
                    .build();
        }


        private BookResponse mapToBookingResponse(Booking existingBooking) {
            // TODO Auto-generated method stub
            return BookResponse.builder()
            .bookingId(existingBooking.getBookingId())
            .eventName(existingBooking.getEventName())
            .eventLocation(existingBooking.getEventLocation())
            .applicantName(existingBooking.getApplicantName())
            .numberOfPeople(existingBooking.getNumberOfPeople())
            .mobileNumber(existingBooking.getMobileNumber())
            .emailId(existingBooking.getEmailId())
            .address(existingBooking.getAddress())
            .shows(existingBooking.getShows())
            .time(existingBooking.getTime())
            .date(existingBooking.getDate())
            .build();
           
        }
}